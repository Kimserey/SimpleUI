// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./scss/SimpleUI.scss')
        .pipe(sass())
        .pipe(gulp.dest("./css"))
});