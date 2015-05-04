var gulp = require('gulp'),
    gulpWebpack = require('gulp-webpack'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    changed  = require('gulp-changed');
var webpack = require("webpack");
var configPath = require('../config-path');
var through = require('through2');
var path = require('path');

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
                    jquery: __dirname + '/../../bower_components/jquery/dist/jquery.js',
                    lazyload: __dirname + '/../../bower_components/jquery.lazyload/jquery.lazyload.js'
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
        .pipe(uglify())
        .pipe(gulp.dest(pathDest));
}

gulp.task('script-min-pc', function () {
    taskScripts(
        configPath.pc.dev,
        configPath.pc.script.release
    );
});

gulp.task('script-min-sp', function () {
    taskScripts(
        configPath.sp.dev,
        configPath.sp.script.release
    );
});