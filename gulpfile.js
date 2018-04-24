const gulp = require('gulp');
const minifycss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const del = require('del');
const runSequence = require('run-sequence');
const Hexo = require('hexo');


gulp.task('clean', function() {
    return del(['public/**/*', 'db.json']);
});

// generate html with 'hexo generate'
const hexo = new Hexo(process.cwd(), {});
gulp.task('generate', function(cb) {
    hexo.init().then(function() {
        return hexo.call('generate', {
            watch: false
        });
    }).then(function() {
        return hexo.exit();
    }).then(function() {
        return cb()
    }).catch(function(err) {
        console.log(err);
        hexo.exit(err);
        return cb(err);
    })
})

gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

// [Proper configuration of imagemin plugins](https://github.com/sindresorhus/gulp-imagemin/issues/190)
// [Images are not getting compressed to a great extent](https://github.com/imagemin/imagemin/issues/246)
gulp.task('minify-img', function() {
    return gulp.src('./public/resources/images/**/*')
        .pipe(imagemin(
          [imageminPngquant(), imageminMozjpeg()],
          {verbose: true}
        ))
        .pipe(gulp.dest('./public/resources/images'))
})

gulp.task('compress', function(cb) {
    runSequence(['minify-html', 'minify-css', 'minify-js', 'minify-img'], cb);
});


//gulp.task('build', ['clean', 'generate', 'compress']);
gulp.task('build', function(cb) {
    runSequence('clean', 'generate', 'compress', cb)
});

gulp.task('default', [])