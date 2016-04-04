// TODO: improve the build/watch system

var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var compass = require('gulp-compass');
var cssMinify = require('gulp-minify-css');
var gulp = require('gulp');
var gutil = require('gulp-util');
var htmlreplace = require('gulp-html-replace');
var reload = browserSync.reload;
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
    'react',
    'react-dom'
];
// keep a count of the times a task refires
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function () {
    bundleApp(false);
});

gulp.task('build', function (){
    bundleApp(true);
});

gulp.task('deploy', ['build', 'styles', 'images', 'htmlblocks'], function() {
    // Deploy to GH Pages
});

gulp.task('htmlblocks', function() {
    return gulp.src('./src/*.html')
        .pipe(htmlreplace({
            'js': '/js/bundle.min.js'
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('html', function() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('images', function() {
    return gulp.src('./src/images/**/*.{gif,jpg,jpeg,png,svg,webp}')
        .pipe(gulp.dest('build/images'));
});

gulp.task('styles', function() {
  gulp.src('./src/scss/*.scss')
    .pipe(compass({
        config_file: './config.rb',
        css: 'build/css',
        sass: 'src/scss'
    }))
    .pipe(cssMinify())
    .pipe(gulp.dest('./build/css'))
    .on('error', function(err) {
        console.log(err.message)
    })
});

gulp.task('watch', function () {
    browserSync({
        notify: false,
        logPrefix: 'BS',
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        // will present a certificate warning in the browser.
        // https: true,
        server: ['build']
    });

    gulp.watch(['./src/**/*.html'], ['html', reload]);
    gulp.watch(['./src/js/**/*.js'], ['scripts']);
    gulp.watch(['./src/scss/**/*.scss'], ['styles']);

    gulp.watch(['./build/css/*.css']).on('change', reload);
    gulp.watch(['./build/js/*.js']).on('change', reload);
    gulp.watch(['./build/*.html']).on('change', reload);
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['scripts', 'html', 'styles', 'images'], function() {
    gulp.run('watch');
});

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
    scriptsCount++;
    // Browserify will bundle all our js files together in to one and will let
    // us use modules in the front end.
    var appBundler = browserify({
        entries: './src/js/app.js',
        debug: true
    });

    // If it's not for production, a separate vendors.js file will be created
    // the first time gulp is run so that we don't have to rebundle things like
    // react everytime there's a change in the js file
    if (!isProduction && scriptsCount === 1) {
        // create vendors.js for dev environment.
        browserify({
            require: dependencies,
            debug: true
        })
        .bundle()
        .on('error', gutil.log)
        .pipe(source('vendors.js'))
        .pipe(gulp.dest('./build/js'));
    }

    if (!isProduction){
        // make the dependencies external so they dont get bundled by the
        // app bundler. Dependencies are already bundled in vendor.js for
        // development environments.
        dependencies.forEach(function(dep) {
            appBundler.external(dep);
        })
    }

    appBundler
        // transform ES6 and JSX to ES5 with babelify
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', gutil.log)
        .pipe(source(isProduction ? 'bundle.min.js' : 'bundle.js'))
        .pipe(buffer())
        .pipe(uglify(false))
        .pipe(gulp.dest('./build/js'));
}
