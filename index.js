var Metalsmith  = require('./lib');
var sass        = require('metalsmith-sass');
var concat      = require('metalsmith-concat');

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(sass({
    sourceMap: true,
    sourceMapContents: true,
    outputDir: function(originalPath) {
      // this will change scss/some/path to css/some/path
      return originalPath.replace("style", "assets");
    }
  }))
  .use(concat({
    //files: 'js/**/*.js',
    files: [
      'js/setup.js',
      'asdf.js'
    ],
    output: 'assets/main.js',
  }))
  .build(function(err) {
    if (err) { throw err; }
  });
