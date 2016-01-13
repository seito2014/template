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
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(changed(pathDest))
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
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream:true}));
}
function taskPureScripts(pathSrc,pathDest){
    return gulp.src(pathSrc)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(jshint(configPath.jshintrc))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream:true}));
}

gulp.task('script-pc', function () {
    taskScripts(
        configPath.pc.script.src,
        configPath.pc.script.dest,
        configPath.pc.dev
    );
    taskPureScripts(
        configPath.pc.script.srcAll,
        configPath.pc.script.dest
    );
});

gulp.task('script-sp', function () {
    taskScripts(
        configPath.sp.script.src,
        configPath.sp.script.dest,
        configPath.sp.dev
    );
    taskPureScripts(
        configPath.sp.script.srcAll,
        configPath.sp.script.dest
    );
});