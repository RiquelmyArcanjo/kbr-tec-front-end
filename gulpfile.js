var gulp = require('gulp');
var sass = require('gulp-sass');
const image = require('gulp-image');
const autoprefixer = require('gulp-autoprefixer');

var paths = {
    src: 'src/app.scss',
    dist: 'dist/'
}

var sassDevOptions = {
    outputStyle: 'compressed'
}

//Tasks
gulp.task('stylesAutoPrefixer', function(){
    return gulp.src(paths.src)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(paths.dist));
});
 
/*gulp.task('reduceImg', function () {
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('src/img/'));
});*/

gulp.task('watch', function() {
    gulp.watch(paths.src, gulp.series('stylesAutoPrefixer'));
    //posso add + aqui
});


// Default Task
gulp.task('default', gulp.series('stylesAutoPrefixer', /*'reduceImg',*/'watch'));


