const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const sass = require("gulp-sass");
const data = require("gulp-data");

gulp.task("default", function () {
  return gulp
    .src("src/templates/*.html")
    .pipe(
      data(function () {
        return require("./src/data/global.json");
      })
    )
    .pipe(
      nunjucksRender({
        path: ["src/templates/"], // String or Array
      })
    )
    .pipe(gulp.dest("dist"));
});




// Watch Task

gulp.task('watch', function () {
  return gulp.watch("src/templates/**/*.html", gulp.series['default']);
});