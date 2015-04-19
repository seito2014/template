var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    gulpif = require('gulp-if');
var configPath = require('../config-path');
var browser = require("browser-sync");
var argv = require('yargs').argv;

var min = !!(argv.min);

function taskImage(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(plumber())
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(gulpif(min,imagemin({
            optimizationLevel: 7
        })))
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream: true}));
}

gulp.task('image-pc', function () {
    taskImage(
        configPath.pc.image.src,
        configPath.pc.image.dest);
});

gulp.task('image-sp', function () {
    taskImage(
        configPath.sp.image.src,
        configPath.sp.image.dest);
});