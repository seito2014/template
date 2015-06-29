var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    spritesmith = require("gulp.spritesmith");
var configPath = require('../config-path'),
    configSetting = require('../config-setting');

function taskSprite(pathSrc,pathImageDest,pathStyleDest) {
    var spriteData = gulp.src(pathSrc)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(spritesmith({
            imgName: configSetting.sprite.imgName,
            cssName: configSetting.sprite.cssName,
            cssFormat: 'scss',
            padding: configSetting.sprite.padding,
            cssTemplate: configPath.spriteTemplate
        }));
    spriteData.img.pipe(gulp.dest(pathImageDest));
    spriteData.css.pipe(gulp.dest(pathStyleDest));
}

gulp.task('sprite-pc', function () {
    taskSprite(
        configPath.pc.sprite.src,
        configPath.pc.sprite.destImage,
        configPath.pc.sprite.destStyle
    );
});

gulp.task('sprite-sp', function () {
    taskSprite(
        configPath.sp.sprite.src,
        configPath.sp.sprite.destImage,
        configPath.sp.sprite.destStyle
    );
});