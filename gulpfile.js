let gulp = require('gulp');
let include_file = require('gulp-file-include');

gulp.task('include-html', () => {
    return gulp.src('./src/*.html')
        .pipe(include_file())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-js', () => {
    return gulp.src('./src/js/*.js').pipe(gulp.dest('dist/js'));
});

gulp.task('copy-css', () => {
    return gulp.src('./src/css/*.css').pipe(gulp.dest('dist/css'));
});

gulp.task('copy-img', () => {
    return gulp.src('./src/img/*.*').pipe(gulp.dest('dist/img'));
});