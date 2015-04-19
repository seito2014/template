var gulp = require('gulp'),
    ejs = require("gulp-ejs"),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify");
var configPath = require('../config-path');
var browser = require("browser-sync");

function taskEjs(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(plumber())
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(ejs())
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream: true}));
}

gulp.task('ejs-pc', function () {
    taskEjs(
        configPath.pc.html.src,
        configPath.pc.html.dest
    );
});

gulp.task('ejs-sp', function () {
    taskEjs(
        configPath.sp.html.src,
        configPath.sp.html.dest
    );
});