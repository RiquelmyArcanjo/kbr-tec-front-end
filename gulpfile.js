var gulp = require('gulp');
var sass = require('gulp-sass');

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
