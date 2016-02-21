var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');;
var css = require('css');

gulp.task('connect', function(){
    connect.server({
        root: 'public',
        port: 4000
    })
});

gulp.task('scripts', function() {
    // Grabs the app.js file
    return browserify([
                        './app/js/index.js',
                        './app/js/app.js',
                        './app/js/mainPage/controller.js',
                        './app/js/login/controller.js'
                   ])
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('runScripts', function(){
    gulp.run('scripts');
    gulp.run('styles');
});

gulp.task('styles', function() {
    return gulp.src(
                        './app/css/style.css'
                   )
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function(){
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.css', ['styles']);
});

gulp.task('default', ['connect','runScripts', 'watch']);
