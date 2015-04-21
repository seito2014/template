var gulp = require('gulp');
var iconfont = require('gulp-iconfont'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify");
var configPath = require('../config-path'),
    configSetting = require('../config-setting');

function taskIconfont(pathSrc, pathDest) {
    return gulp.src([pathSrc])
        .pipe(plumber())
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(iconfont({
            fontName: configSetting.iconfont.name, // 生成するフォントファイルの名前を指定する
            appendCodepoints: true // コードポイントを付与するかどうか（trueで付与する）
        }))

        // アイコンフォントファイルの出力先を指定する
        .pipe(gulp.dest(pathDest));
}

gulp.task('iconfont-pc', function () {
    taskIconfont(
        configPath.pc.iconfont.src,
        configPath.pc.iconfont.dest
    );
});

gulp.task('iconfont-sp', function () {
    taskIconfont(
        configPath.sp.iconfont.src,
        configPath.sp.iconfont.dest
    );
});