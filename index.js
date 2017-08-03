var Metalsmith  = require('./lib');
var sass        = require('metalsmith-sass');
var concat      = require('metalsmith-concat');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
const example   = require('./modules/example');

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog whäääää",
    description: "It's about saying »Hello« to the World whääää.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .ignore([
    '.*.*',  //ignore hidden files like .eslintrc
    //'layouts' //ignore layouts folder when not prebuild pages
  ])
  .clean(true)
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
      '../node_modules/riot/riot.min.js',
      //'tags/*.tag.html',
      'js/setup.js',
      'js/asdf.js'
    ],
    output: 'assets/main.js',
  }))
  .use(example({
    but: 'whole'
  }))
  //.use(listRiotTags({butt: 'hole'}))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    directory: './src/layouts'
  }))
  .build(function(err) {
    if (err) { throw err; }
  });
