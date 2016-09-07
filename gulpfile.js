const gulp = require('gulp'),
  flatten = require('gulp-flatten'),

  css = [
    './node_modules/materialize-css/dist/css/materialize.min.css'
  ],

  js = [
    './node_modules/react/dist/react.min.js',
    './node_modules/react-dom/dist/react-dom.min.js'
  ];

gulp.task('copy-3p-css', function () {
  return gulp.src(css)
    .pipe(flatten())
    .pipe(gulp.dest('./build/thirdparty/css'));
});

gulp.task('copy-3p-js', function () {
  return gulp.src(js)
    .pipe(flatten())
    .pipe(gulp.dest('./build/thirdparty/js'));
});

gulp.task('copy-build-deps', ['copy-3p-css', 'copy-3p-js']);