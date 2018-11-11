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
  // HTML
  gulp.watch('index.html').on('change', reload);
  gulp.watch('./app/blog/blog.html').on('change', reload);
  gulp.watch('./app/projects/projects.html').on('change', reload);
  gulp.watch('./app/courses/courses.html').on('change', reload);
  gulp.watch('./app/info/info.html').on('change', reload);
  gulp.watch('./app/footer.html').on('change', reload);

  // CSS
  gulp.watch('./app/stylesheets/css/styles.css').on('change', reload);
  gulp.watch('./app/stylesheets/css/menu.css').on('change', reload);

  // JS
  gulp.watch('./app/script/include_footer.js').on('change', reload);
  gulp.watch('./app/script/menu.js').on('change', reload);
});

gulp.task('default', ['browser-sync', 'watch']);
