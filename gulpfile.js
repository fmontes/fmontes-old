// declarations, dependencies
// ----------------------------------------------------------------------------
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var compass = require('gulp-compass');

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

gulp.task('deploy', function (){
	bundleApp(true);
});

gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
  gulp.src('./src/scss/*.scss')
		// TODO: use a config.rb but it was showing error: 'Individual stylesheets must be in the sass directory'
    .pipe(compass({
			config_file: './config.rb',
			css: 'build/css',
			sass: 'src/scss'
    }))
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

	gulp.watch(['./src/*.html'], ['html', reload]);
	gulp.watch(['./src/js/*.js'], ['scripts']);
	gulp.watch(['./src/scss/*.scss'], ['styles']);

	gulp.watch(['./build/css/*.css']).on('change', reload);
	gulp.watch(['./build/js/*.js']).on('change', reload);
	gulp.watch(['./build/*.html']).on('change', reload);
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['html','scripts','watch']);

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
	scriptsCount++;
	// Browserify will bundle all our js files together in to one and will let
	// us use modules in the front end.
	var appBundler = browserify({
  	entries: './src/js/main.js',
  	debug: true
	})

	// If it's not for production, a separate vendors.js file will be created
	// the first time gulp is run so that we don't have to rebundle things like
	// react everytime there's a change in the js file
	if (!isProduction && scriptsCount === 1){
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
		dependencies.forEach(function(dep){
			appBundler.external(dep);
		})
	}


	// TODO: add minify
	appBundler
		// transform ES6 and JSX to ES5 with babelify
  	.transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js'));
}
