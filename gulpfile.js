var gulp = require('gulp');
var watch = require('gulp-watch');
var autoprefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var svgSprite = require('gulp-svg-sprite');

gulp.task('sass', function () {
  return gulp.src('./styles/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(autoprefix())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./styles/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('styles/sass/**/*.scss', ['sass']);
});

var spriteConfig = {
  mode: {
    symbol: {
      dest: '',
      sprite: './icon-sprite.svg',
      example: true
    }
  }
};

gulp.task('icons', function () {
  return gulp.src('images/icons/src/**/*.svg')
  .pipe(svgSprite(spriteConfig))
  .pipe(gulp.dest('images/icons'))
});
