var gulp = require('gulp');

gulp.task('default', ['html', 'css'], function () {
  gulp.watch('./source/**/*.html', ['html']);
});

gulp.task('html', function () {
  gulp.src('./source/index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('css', function () {
  gulp.src(require.resolve('normalize.css'))
    .pipe(gulp.dest('./public'));
});
