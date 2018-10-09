// Modules & Plugins.
var gulp = require(' gulp');
var concat = require(' gulp-concat');
var myth = require(' gulp-myth');

gulp.task('styles', function() {
  return gulp.src('stylesheets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});
