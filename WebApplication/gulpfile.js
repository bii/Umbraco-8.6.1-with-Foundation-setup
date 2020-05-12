const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(concat('all.scss'))
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});

gulp.task('js', (done) => {
    gulp.src('./src/js/main.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./dist/js'));
    done();
});

gulp.task('js:watch', function () {
    gulp.watch('./src/**/*.js', gulp.task('js'));
});

gulp.task('all:watch', function () {
    gulp.watch('./src/**/*.js', gulp.task('js'));
    gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});