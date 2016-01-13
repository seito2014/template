var gulp = require('gulp'),
    gulpWebpack = require('gulp-webpack'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    changed  = require('gulp-changed');

var configPath = require('../config-path');
var configWebpack = require('../config-webpack');
var browser = require("browser-sync");
var through = require('through2');

function taskScripts(pathSrc,pathDest,pathEntry){
    return gulp.src(pathSrc)
        .pipe(changed(pathDest))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(jshint(configPath.jshintrc))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulpWebpack({
            entry: {
                app: pathEntry + '/js/app.js'
                //library: pathEntry + '/js/library.js'
            },
            output: configWebpack.output,
            resolve: configWebpack.resolve,
            plugins: configWebpack.plugins
        }))
        .pipe(uglify())
        .pipe(gulp.dest(pathDest));
}

gulp.task('script-min-pc', function () {
    taskScripts(
        configPath.pc.script.src,
        configPath.pc.script.release,
        configPath.pc.dev
    );
});

gulp.task('script-min-sp', function () {
    taskScripts(
        configPath.sp.script.src,
        configPath.sp.script.release,
        configPath.sp.dev
    );
});