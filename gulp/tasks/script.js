var gulp = require('gulp'),
    gulpWebpack = require('gulp-webpack'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    gulpif = require('gulp-if'),
    changed  = require('gulp-changed');
var webpack = require("webpack");
var configPath = require('../config-path');
var browser = require("browser-sync");
var through = require('through2');
var path = require('path');
var argv = require('yargs').argv;

var min = !!(argv.min);

function taskScripts(pathSrc,pathDest){
    return gulp.src(configPath.pc.script.src)
        .pipe(changed(pathDest))
        .pipe(plumber())
        .pipe(jshint(configPath.jshintrc))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(gulpWebpack({
            entry: {
                app: pathSrc + '/js/app.js',
                library: pathSrc + '/js/library.js'
            },
            output: {
                filename: '[name].js'
            },
            resolve: {
                root: [path.join(__dirname, "../../bower_components")],
                extensions: ['', '.js', '.html'],
                alias: {
                    bower: 'bower_components',
                    jquery: __dirname + '/../../bower_components/jquery/dist/jquery.js'
                }
            },
            plugins: [
                new webpack.ResolverPlugin(
                    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
                ),
                new webpack.optimize.CommonsChunkPlugin({
                    name: "library",
                    filename: "library.js"
                })
            ]
        }))
        .pipe(gulpif(min,uglify()))
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream:true}));
}

gulp.task('script-pc', function () {
    taskScripts(
        configPath.pc.dev,
        configPath.pc.script.dest
    );
});

gulp.task('script-sp', function () {
    taskScripts(
        configPath.sp.dev,
        configPath.sp.script.dest
    );
});