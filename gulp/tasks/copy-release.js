var gulp = require('gulp'),
    ejs = require("gulp-ejs"),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    uglify = require('gulp-uglify');
var configPath = require('../config-path');
var browser = require("browser-sync");

function copy(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream: true}));
}

function minify(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(uglify())
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream: true}));
}

gulp.task('copy-min-pc', function () {
    minify(
        configPath.pc.script.srcPages,
        configPath.pc.script.releasePages
    );
    minify(
        configPath.pc.lib.src,
        configPath.pc.lib.release
    );
    copy(
        configPath.pc.font.src,
        configPath.pc.font.release
    );
});

gulp.task('copy-min-sp', function () {
    minify(
        configPath.sp.script.srcPages,
        configPath.sp.script.releasePages
    );
    minify(
        configPath.sp.lib.src,
        configPath.sp.lib.release
    );
    copy(
        configPath.sp.font.src,
        configPath.sp.font.release
    );
});