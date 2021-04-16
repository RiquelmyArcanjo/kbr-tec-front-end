var gulp = require('gulp');
var sass = require('gulp-sass');
const image = require('gulp-image');

var paths = {
    src: 'src/app.scss',
    dist: 'dist/'
}

var sassDevOptions = {
    outputStyle: 'compressed'
}

//Tasks
gulp.task('styles', function(){
    return gulp.src(paths.src)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', gulp.series('styles'));
    //posso add + aqui
});

// Default Task
gulp.task('default', gulp.parallel('styles', 'watch'));

 /*
gulp.task('default', function () {
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('src/img/'));
});*/
