var Metalsmith  = require('metalsmith');
var concat      = require('metalsmith-concat');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(concat({
    files: 'js/**/*.js',
    output: 'assets/main.js',
  }));
  .build(function(err, files) {
    if (err) { throw err; }
  });
