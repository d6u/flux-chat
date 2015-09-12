var gulp = require('gulp');

var copyGlob = [
  './source/index.html',
  './source/img/*'
];

gulp.task('default', ['copy'], function () {
  gulp.watch(copyGlob, ['copy']);
});

gulp.task('copy', function () {
  gulp.src(copyGlob, {base: './source'})
    .pipe(gulp.dest('./public'));

  gulp.src(require.resolve('normalize.css'))
    .pipe(gulp.dest('./public'));
});
