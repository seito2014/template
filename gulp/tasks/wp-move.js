var gulp = require('gulp'),
    ejs = require("gulp-ejs"),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify");
var configPath = require('../config-path');
var browser = require("browser-sync");

function copy(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream: true}));
}

gulp.task('wp-pc', function () {
    copy(
        [ configPath.pc.release + '/**/*', '!' + configPath.pc.release + '/*.html'],
        configPath.wp.pc
    );
});

gulp.task('wp-sp', function () {
    copy(
        [ configPath.sp.release + '/**/*', '!' + configPath.sp.release + '/*.html'],
        configPath.wp.sp
    );
    console.log(configPath.wp.sp);
});