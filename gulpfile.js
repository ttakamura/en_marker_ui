var gulp          = require('gulp');
var electron      = require('electron-connect').server.create();
var webpack       = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var $             = require('gulp-load-plugins')();

gulp.task('compile', function(){
    return gulp.src('app/**/*.{js,jsx}')
        .pipe(webpack(Object.assign({}, webpackConfig, {
            // watch: true,
        })))
        .pipe(gulp.dest('./build/'));
});

gulp.task('serve', function () {
    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);

    // RendererProcessが読み込むリソースが変更されたら, RendererProcessにreloadさせる
    gulp.watch(['build/*.{html,js}', '*.html'], electron.reload);
});
