var gulp       = require("gulp"),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    concat     = require('gulp-concat'),
    sass       = require('gulp-sass');

gulp.task("browserify", function () {
    return browserify({
            entries: [__dirname + '/public/src/index.js'],
            paths: [__dirname + '/public/src', __dirname + '/public/src/application']
        })
        .transform(babelify)
        .bundle()
        .pipe(source('browserify.js'))
        .pipe(buffer())
        .pipe(gulp.dest("public/dist"));
});

gulp.task('scripts', ['browserify'], () => {
    return gulp.src(['public/app/resources/dist/semantic.min.js', 'public/dist/browserify.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/dist'))
});

gulp.task('sass', function () {
    return gulp.src('public/resources/sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('copy', () => (
    gulp
        .src('public/resources/semantic/dist/themes/**/*')
        .pipe(gulp.dest('public/dist/themes'))
))

gulp.task('default', ['copy', 'scripts', 'sass']);

gulp.task('watch', function () {
    gulp.start('default');

    gulp.watch('public/resources/sass/**/*.sass', ['sass']);
    gulp.watch('public/src/**/*.js', ['scripts']);
});