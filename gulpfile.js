var gulp = require('gulp');
var requireDir = require('require-dir');
var configPath = require('./gulp/config-path');

requireDir('./gulp/tasks', { recursive: true });

//watch pc
gulp.task('watch-pc', function () {
    gulp.watch(configPath.pc.html.src,['ejs-pc']);
    gulp.watch(configPath.pc.style.src,['style-pc']);
    gulp.watch(configPath.pc.script.src,['script-pc']);
    gulp.watch(configPath.pc.image.src,['image-pc']);
});
gulp.task('default', ['server-pc','watch-pc','ejs-pc','style-pc','script-pc','image-pc','copy-pc'], function() {});

//watch sp
gulp.task('watch-sp', function () {
    gulp.watch(configPath.sp.html.src,['ejs-sp']);
    gulp.watch(configPath.sp.style.src,['style-sp']);
    gulp.watch(configPath.sp.script.src,['script-sp']);
    gulp.watch(configPath.sp.image.src,['image-sp']);
});
gulp.task('sp', ['server-sp','watch-sp','ejs-sp','style-sp','script-sp','image-sp','copy-sp'], function() {});