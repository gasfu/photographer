const gulp = require('gulp');
const minify = require('gulp-clean-css');
const stylus = require('gulp-stylus');
const mmq = require('gulp-merge-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const path = {
	'stylesheetSRC': 'app/stylesheets/**/*',
	'stylesheetMain': 'app/stylesheets/main.styl',
	'stylesheetDEST': 'public/dist'
};

gulp.task('default', () => {
	gulp.watch(path.stylesheetSRC, ['style']);
});

gulp.task('style', () => {
	return gulp.src(path.stylesheetMain)
	.pipe(sourcemaps.init())
	.pipe(stylus({compress: true, 'include css': true}))
	.pipe(mmq())
	.pipe(minify())
	.pipe(rename('application.min.css'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.stylesheetDEST))
});