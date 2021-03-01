var gulp = require('gulp');
var sass = require('gulp-sass');
const image = require('gulp-image');

var paths = {
    src: 'src/**/*.scss',
    dist: 'dist/'
}

var sassDevOptions = {
    outputStyle: 'compressed'
}
gulp.task('default', function(){
    return gulp.src(paths.src)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(paths.dist));
});
 /*
gulp.task('default', function () {
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('src/img/'));
});*/
