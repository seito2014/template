var gulp = require('gulp');
var iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify");
var configPath = require('../config-path'),
    configSetting = require('../config-setting');

var fontName = configSetting.iconfont.name;

function taskIconfont(pathSrc, pathFont, pathStyleDest, pathDest) {
    return gulp.src([pathSrc])
        .pipe(plumber())
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(iconfont({
            fontName: fontName, // 生成するフォントファイルの名前を指定する
            appendCodepoints: true // コードポイントを付与するかどうか（trueで付与する）
        }))
        .on('codepoints', function (codepoints, options) {
            gulp.src('../iconfont-template.css')
                .pipe(consolidate('underscore', {
                    glyphs: codepoints,
                    fontName: fontName,
                    fontPath: pathFont,
                    prefix: 'icon'
                }))
                .pipe(gulp.dest(pathStyleDest));
        })

        // アイコンフォントファイルの出力先を指定する
        .pipe(gulp.dest(pathDest));
}

gulp.task('iconfont-pc', function () {
    taskIconfont(
        configPath.pc.iconfont.src,
        configPath.pc.dev + '/font/' + configSetting.iconfont.name + '/dest',
        configPath.pc.iconfont.destStyle,
        configPath.pc.iconfont.dest
    );
});

gulp.task('iconfont-sp', function () {
    taskIconfont(
        configPath.sp.iconfont.src,
        configPath.sp.dev + '/font/' + configSetting.iconfont.name + '/dest',
        configPath.sp.iconfont.destStyle,
        configPath.sp.iconfont.dest
    );
});