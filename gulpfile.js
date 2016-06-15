// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCs = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    gulp.src('./scss/SimpleUI.scss')
        .pipe(sass())
        .pipe(gulp.dest("./css"));

    gulp.src('./css/SimpleUI.css')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./js/SimpleUI.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});
