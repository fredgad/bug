const  
  gulp = require('gulp'),
  pump = require('pump'),
  minify = require('gulp-minify'),
  concat = require('gulp-concat'),
  cleanCSS = require('gulp-clean-css'),
  browserSync = require('browser-sync').create();

function styles() {  
  gulp.src('src/sass/game.css')
    .pipe(concat('game.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());  
};  
function styles2() {  
  gulp.src('src/sass/style.css')
    .pipe(concat('style.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());  
};
function styles3() {  
  gulp.src('src/sass/dryfog.css')
    .pipe(concat('dryfog.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());  
};
function styles4() {  
  gulp.src('src/sass/maket.css')
    .pipe(concat('maket.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());  
};
function styles5() {  
  gulp.src('src/sass/paint.css')
    .pipe(concat('paint.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());  
};
function styles6() {  
  gulp.src('src/sass/timer.css')
    .pipe(concat('timer.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());  
};

function scripts() {
  gulp.src('src/js/game.js')
    .pipe(concat('game.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
};
function scripts2() {
  gulp.src('src/js/script.js')
    .pipe(concat('script.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
};
function scripts3() {
  gulp.src('src/js/dryfog.js')
    .pipe(concat('dryfog.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
};
function scripts4() {
  gulp.src('src/js/maket.js')
    .pipe(concat('maket.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
};
function scripts5() {
  gulp.src('src/js/paint.js')
    .pipe(concat('paint.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
};
function scripts6() {
  gulp.src('src/js/timer.js')
    .pipe(concat('timer.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
};

function watch() {
  browserSync.init({
    proxy: "redBinPhp"
  });
  
  gulp.watch('./src/sass/*.css', async ()=> { 
    styles(); 
    styles2(); 
    styles3(); 
    styles4(); 
    styles5();
    styles6();
  });
  gulp.watch('./src/js/*.js', async ()=> { 
    scripts(); 
    scripts2(); 
    scripts3(); 
    scripts4(); 
    scripts5(); 
    scripts6(); 
  }); 
};

gulp.task('styles', async ()=> { 
  styles(); 
  styles2(); 
  styles3(); 
  styles4(); 
  styles5();
  styles6();
});
gulp.task('scripts', async ()=> {
  scripts(); 
  scripts2(); 
  scripts3(); 
  scripts4(); 
  scripts5(); 
  scripts6(); 
});
gulp.task('watch', async ()=> { 
  watch(); 
});

