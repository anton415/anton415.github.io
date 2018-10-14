// Modules & Plugins.
var gulp = require('gulp');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src('stylesheets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('stylesheets/css'));
});

gulp.task('images', function() {
  return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/scss/*.scss', 'styles');
  gulp.watch('img/*', 'images');
});

// TODO: Error. 'TypeError: gulp.parallel is not a function'.
// gulp.task('default', gulp.parallel('styles', 'images', 'watch'));
