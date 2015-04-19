var gulp = require('gulp');
var configPath = require('../config-path');
var browser = require("browser-sync");

function taskServer(pathDest,portNum) {
    browser({
        server: {
            baseDir: pathDest
        },
        port: portNum
    });
}

gulp.task('server-pc', function () {
    taskServer(
        configPath.pc.public,
        5000
    );
});

gulp.task('server-sp', function () {
    taskServer(
        configPath.sp.public,
        5001
    );
});