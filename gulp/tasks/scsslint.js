var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    scsslint = require('gulp-scss-lint');
var configPath = require('../config-path');
var browser = require("browser-sync");

function taskScsslint(pathSrc) {
    return gulp.src(pathSrc)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(scsslint({'config': configPath.scsslintYml}))
        .pipe(browser.reload({stream: true}));
}

gulp.task('scsslint-pc', function () {
    taskScsslint(
        [
            configPath.pc.style.src,
            configPath.pc.style.lintExcluding[0],
            configPath.pc.style.lintExcluding[1]
        ]
    );
});

gulp.task('scsslint-sp', function () {
    taskScsslint(
        [
            configPath.sp.style.src,
            configPath.sp.style.lintExcluding[0],
            configPath.sp.style.lintExcluding[1]
        ]
    );
});