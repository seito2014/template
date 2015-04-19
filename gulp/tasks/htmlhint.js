var gulp = require('gulp'),
    htmlhint = require('gulp-htmlhint'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');
var configPath = require('../config-path');
var browser = require('browser-sync');

function taskHtmlhint(pathSrc) {
    return gulp.src(pathSrc)
        .pipe(htmlhint())
        .pipe(htmlhint.reporter());
}

gulp.task('htmlhint-pc', function () {
    taskHtmlhint(configPath.pc.html.hint);
});

gulp.task('htmlhint-sp', function () {
    taskHtmlhint(configPath.sp.html.hint);
});