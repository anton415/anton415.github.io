var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Watch Task.
gulp.task('watch', function() {
  gulp.watch('index.html').on('change', reload);
  gulp.watch('./app/blog/blog.html').on('change', reload);
  gulp.watch('./app/projects/projects.html').on('change', reload);
});

gulp.task('default', ['browser-sync', 'watch']);
