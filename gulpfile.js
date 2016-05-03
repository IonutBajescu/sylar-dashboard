var gulp       = require("gulp"),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    sass       = require('gulp-sass');

gulp.task("scripts", function () {
    return browserify([__dirname + '/public/src/index.js'])
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest("public/dist"));
});

gulp.task('sass', function () {
    return gulp.src('public/resources/sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('default', () => gulp.start('scripts', 'sass'));

gulp.task('watch', function () {
    gulp.start('default');

    gulp.watch('public/resources/sass/**/*.sass', ['sass']);
    gulp.watch('public/src/**/*.js', ['scripts']);
});