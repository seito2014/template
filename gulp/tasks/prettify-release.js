var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    prettify = require('gulp-prettify');
var configPath = require('../config-path');

function taskPrettify(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(prettify({indent_size: 4}))
        .pipe(gulp.dest(pathDest))
}

gulp.task('pret-pc', function () {
    taskPrettify(
        configPath.pc.html.hint,
        configPath.pc.html.release
    )
});
gulp.task('pret-sp', function () {
    taskPrettify(
        configPath.sp.html.hint,
        configPath.sp.html.release
    )
});