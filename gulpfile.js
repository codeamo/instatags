var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './',
      routes: {
        '/node_modules': '../node_modules'
      }
    },
    port: 8080
  });
});

// Watch files and reload browser on change
gulp.task('watch', function () {
  gulp
    .watch(['index.html', 'css/main.css', 'js/main.js', 'lib/instagram.js'])
    .on('change', browserSync.reload);
});

gulp.task('default', gulp.series('browser-sync', 'watch'));
