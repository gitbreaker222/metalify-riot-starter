var Metalsmith      = require('./lib');
var sass            = require('metalsmith-sass');
var concat          = require('metalsmith-concat');
var markdown        = require('metalsmith-markdown');
const layouts       = require('./modules/metalsmith-layouts-222/index');
const listRiotTags  = require('./modules/metalsmith-list-riot-tags');

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog whäääää",
    description: "It's about saying »whääää« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/",
    riotTags: 'app-footer.tag.html'
  })
  .source('./src')
  .destination('./build')
  .ignore([
    '.*.*',  //ignore hidden files like .eslintrc
    'layouts',
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
  .use(listRiotTags())
  .use(markdown())
  .use(layouts({
    engine: 'pug',
    directory: './src/layouts',
    layoutExtension: '.pug',
    pattern: 'content/**/*.html'
  }))
  .build(function(err) {
    if (err) { throw err; }
  });
