var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    spritesmith = require("gulp.spritesmith");
var configPath = require('../config-path');

function taskSprite(pathSrc,pathImageDest,pathStyleDest) {
    var spriteData = gulp.src(pathSrc)
        .pipe(plumber())
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            cssFormat: 'scss',
            padding: 2,
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