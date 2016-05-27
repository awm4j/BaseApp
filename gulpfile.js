var elixir = require('laravel-elixir');
var gulp = require('gulp');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


elixir(function(mix) {
  mix.styles([
    'bootstrap.min.css',
    'bootstrap-theme.min.css'
  ], 'public/css/core.css', './resources/assets/css/');

  mix.styles([
    'navbar-static-top.css'
  ], 'public/css/custom.css', './resources/assets/css/');

  mix.styles([
    'login.css'
  ], 'public/css/login.css', './resources/assets/css/');

  mix.scripts([
    'bootstrap.min.js'
  ], 'public/js/core.js', './resources/assets/js/');

  //mix.version(['css/all.css', 'js/all.js']);
});


gulp.task('fonts', function() {
  return gulp.src('resources/assets/fonts/**/*').pipe(gulp.dest('public/fonts'));
});
