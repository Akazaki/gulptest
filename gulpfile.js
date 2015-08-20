var gulp = require('gulp');
var sass = require('gulp-sass');
 
// Tasks
gulp.task('sass', function() {
    gulp.src("css/style.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./css'));
});
 
// Watch
gulp.task('watch', function() {
    gulp.watch('_scss/style.scss', ['sass'])
});
  
gulp.task('default', ['sass','watch']);
