var Metalsmith  = require('./lib');
var concat      = require('metalsmith-concat');

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .clean(true)
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
