var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify");
var configPath = require('../config-path'),
    configSetting = require('../config-setting');

function taskImage(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(imagemin({
            optimizationLevel: configSetting.image.optimizationLevel
        }))
        .pipe(gulp.dest(pathDest));
}
function taskCopy(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(gulp.dest(pathDest));
}

gulp.task('image-min-pc', function () {
    taskImage(
        configPath.pc.image.src,
        configPath.pc.image.release
    );
});

gulp.task('image-min-sp', function () {
    taskImage(
        [configPath.sp.image.src, '!' + configPath.sp.image + '/image/top/main/*'],
        configPath.sp.image.release
    );
    taskCopy(
        configPath.sp.image + '/image/top/main/*',
        configPath.sp.image.release
    );
});