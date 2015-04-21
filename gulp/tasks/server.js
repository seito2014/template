var gulp = require('gulp');
var configPath = require('../config-path'),
    configSetting = require('../config-setting');
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
        configSetting.server.portPC
    );
});

gulp.task('server-sp', function () {
    taskServer(
        configPath.sp.public,
        configSetting.server.portSP
    );
});