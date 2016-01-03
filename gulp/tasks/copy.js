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

gulp.task('copy-pc', function () {
    copy(
        configPath.pc.script.src2,
        configPath.pc.script.dest
    );
    copy(
        configPath.pc.script.srcPages,
        configPath.pc.script.destPages
    );
    copy(
        configPath.pc.lib.src,
        configPath.pc.lib.dest
    );
    copy(
        configPath.pc.font.src,
        configPath.pc.font.dest
    );
    copy(
        configPath.pc.xml.src,
        configPath.pc.xml.dest
    );
});

gulp.task('copy-sp', function () {
    copy(
        configPath.sp.script.src2,
        configPath.sp.script.dest
    );
    copy(
        configPath.pc.script.srcPages,
        configPath.pc.script.destPages
    );
    copy(
        configPath.sp.lib.src,
        configPath.sp.lib.dest
    );
    copy(
        configPath.sp.font.src,
        configPath.sp.font.dest
    );
    copy(
        configPath.sp.xml.src,
        configPath.sp.xml.dest
    );
});