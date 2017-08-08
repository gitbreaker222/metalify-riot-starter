const info          = require('./package.json')
const Metalsmith    = require('./lib')
const sass          = require('metalsmith-sass')
const concat        = require('metalsmith-concat')
const folderTree    = require('./modules/metalsmith-folder-to-json')
const markdown      = require('metalsmith-markdown')
const layouts       = require('./modules/metalsmith-layouts-222/index')
const moveUp        = require('metalsmith-move-up')

Metalsmith(__dirname)
  .metadata({
    title: info.name,
    description: info.description,
    generator: "Metalsmith",
    url: info.homepage
  })
  .source('./src')
  .destination('./build')
  .ignore([
    '.*.*',  //ignore hidden files like .eslintrc
    'layouts'
  ])
  .clean(false)
  .use(sass({
    sourceMap: true,
    sourceMapContents: true,
    outputDir: function(originalPath) {
      // this will change scss/some/path to css/some/path
      return originalPath.replace("style", "assets")
    }
  }))
  .use(concat({
    files: [
      'tags/**/*.tag.html',
      'js/riot-setup.js',
      'js/**/*.js'
    ],
    output: 'assets/main.tag.js'
  }))
  .use(folderTree({
    folder: './src/content'
  }))
  .use(markdown())
  .use(layouts({
    engine: 'pug',
    directory: './src/layouts',
    layoutExtension: '.pug', //custom
    pattern: 'content/**/*.html'
  }))
  .use(moveUp('content/**'))
  .build(function(err) {
    if (err) { throw err }
  })
