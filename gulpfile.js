// IGNORE FOR NOW, taken from smf-seed-express4 project
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var order = require('gulp-order');
var to5 = require('gulp-6to5');

var paths = {
  scripts: [
    //'smf/libs/third-party/*.js',
    'smf/libs/*.js',
    'smf/pages/*.js'
  ],
  scriptsBower: [
    'bower_components/underscore/underscore-min.js',
    'bower_components/backbone/backbone.js',
  ],
  scriptsFirstToRun: [
    'smf/appGlobals.js'
  ],
  scriptslastToRun: [
    'smf/onStart.js'
  ]
};

var all_files_in_order = paths.scriptsFirstToRun.concat(paths.scripts.concat(paths.scriptslastToRun));

gulp.task('build', function(){
  return gulp.src(all_files_in_order, { base: '.' })
    //.pipe(uglify())
    .pipe(order(all_files_in_order))
    .pipe(concat('dist/main.js'))
    .pipe(gulp.dest('.'))
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build']);
});

gulp.task('es6', function () {
    return gulp.src('experiment/es6/es6.js', { base: '.' })
        .pipe(to5())
        .pipe(gulp.dest('smf'));
});

gulp.task('watch-es6', function() {
  gulp.watch(['experiment/es6/es6.js'], ['es6']);
});

gulp.task('default', ['watch']);