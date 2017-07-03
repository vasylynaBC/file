var gulp = require('gulp')
    , concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify')
    , minifyCSS = require('gulp-minify-css')
    , rename = require('gulp-rename');
gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("new.css"))
        .pipe(gulp.dest('dest/'));
});
var uglify = require('gulp-uglify');
 
gulp.task('uglify', function (cb) {
 return gulp.src('dest/new.css')
        .pipe(uglify())
        .pipe(gulp.dest('dest/'));
});
gulp.task('default', function (cb) {
 return gulp.src('dest/new.css')
        .pipe(minifyCSS(''))
        .pipe(gulp.dest('dest/'));
});
gulp.task('default', function (cb) {
 return gulp.src('dest/new.css')
        .pipe(rename('min.css'))
        .pipe(gulp.dest('dest/'));
});