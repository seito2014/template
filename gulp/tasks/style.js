var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    frontnote = require("gulp-frontnote"),
    changed = require('gulp-changed');
var configPath = require('../config-path'),
    configSetting = require('../config-setting');
var browser = require("browser-sync");

function taskStyle(pathSrc, pathDest, pathExcluding, outPath, cssPath, scriptPath) {
    return gulp.src(pathSrc)
        .pipe(changed(pathExcluding))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(frontnote({
            overview: './README.md',
            out: outPath,
            css: cssPath,
            script: scriptPath,
            clean: true
        }))
        .pipe(sass({
            "sourcemap=none": true
        }))
        .pipe(autoprefixer({
            browsers: configSetting.style.autoprefixer,
            cascade: false
        }))
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream: true}));
}

gulp.task('style-pc', function () {
    taskStyle(
        configPath.pc.style.src,
        configPath.pc.style.dest,
        configPath.pc.style.lintExcluding[0], //sass/sprite/
        configPath.pc.frontnoteAsset.out,
        configPath.pc.frontnoteAsset.css,
        configPath.pc.frontnoteAsset.script
    );
});

gulp.task('style-sp', function () {
    taskStyle(
        configPath.sp.style.src,
        configPath.sp.style.dest,
        configPath.sp.style.lintExcluding[0], //sass/sprite/
        configPath.sp.frontnoteAsset.out,
        configPath.sp.frontnoteAsset.css,
        configPath.sp.frontnoteAsset.script
    );
});
