const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

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

gulp.task('default', () =>
    gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env'],
            compact: true,
            minified: true
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
);

gulp.task('default:watch', function () {
    gulp.watch('./src/**/*.js', gulp.task('default'));
});

gulp.task('all:watch', function () {
    gulp.watch('./src/**/*.js', gulp.task('default'));
    gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});