// IGNORE FOR NOW, taken from smf-seed-express4 project
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var order = require('gulp-order');
var to5 = require('gulp-6to5');
var replace = require('gulp-replace');
var rename = require('gulp-rename');

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

gulp.task('rename-pages', function() {
  gulp.src("smf/pages/**/*.js", { base: '.' })
    .pipe(rename(function (path) {
      var dirname = path.dirname.replace('smf/pages', '');
      var basename = dirname + '/' + path.basename;
      if(basename[0] === '/'){
        basename = basename.slice(1);
      }
      basename = basename.replace(/\//g, '.');
      path.dirname = '.';
      path.basename = 'Pages.' + basename;
    }))
    .pipe(gulp.dest("./Scripts"));

  gulp.src("smf/app/*.js", { base: '.' })
    .pipe(rename(function (path) {
      path.dirname = '.';
    }))
    .pipe(gulp.dest("./Scripts"));
});

gulp.task('replace', function() {
  return gulp.src('Scripts/Pages.*.js', { base : './' } )
    .pipe(replace(/App\.router\.define\(\'(.*)\'.*/, function(match, replacement){
      replacement = replacement.replace(/\//g, '.').replace('pages.', '', 'i');
      return '(function(){\n\tvar pageName = \'' + replacement + '\', page = Pages[pageName] = new SMF.UI.Page();'
    }))
    .pipe(replace(/^\}\)\;/m, '})();'))
    .pipe(replace(/\'pages\/.*\'/, function(match){
      match = match.replace(/\//g, '.').replace('pages.', '', 'i');
      return match;
    }))
    .pipe(replace('navgen = App.router.navigateGenerator', 'navgen = App.helpers.pageShow'))
    .pipe(gulp.dest('./'));
});



gulp.task('default', ['watch']);