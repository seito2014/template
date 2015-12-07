var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    sass = require("gulp-sass"),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    changed = require('gulp-changed');
var configPath = require('../config-path'),
    configSetting = require('../config-setting');

function taskStyleRelease(pathSrc, pathDest, pathExcluding) {
    return gulp.src(pathSrc)
        .pipe(changed(pathExcluding))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(sass({
            "sourcemap=none": true
        }))
        .pipe(autoprefixer({
            browsers: configSetting.style.autoprefixer,
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(pathDest));
}

gulp.task('style-min-pc', function () {
    taskStyleRelease(
        configPath.pc.style.src,
        configPath.pc.style.release,
        configPath.pc.style.lintExcluding[0] //sass/sprite/
    );
});

gulp.task('style-min-sp', function () {
    taskStyleRelease(
        configPath.sp.style.src,
        configPath.sp.style.release,
        configPath.sp.style.lintExcluding[0] //sass/sprite/
    );
});
