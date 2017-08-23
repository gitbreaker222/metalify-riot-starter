const info          = require('./package.json')
const Metalsmith    = require('./lib')
const sass          = require('metalsmith-sass')
const concat        = require('metalsmith-concat')
const contentMenu   = require('./modules/metalsmith-content-menu')
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
    'layouts',
    'content'
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
  .use(fetchPrismicContent())
  //.use(markdown())
  .use(contentMenu({
    folder: 'content',
    //fileType: '.html',
    orderBy: 'date',
    ascOrDesc: 'desc'
  }))
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

  function fetchPrismicContent() {
    var Prismic = require('prismic-javascript')
    var PrismicDOM = require('prismic-dom')

    var apiEndpoint = "https://breaker222portfolio.prismic.io/api/v2"
    return function(files, metalsmith, done) {

      Prismic.getApi(apiEndpoint, { })
      .then(function(api) {
        return api.query("") // An empty query will return all the documents
      })
      .then(function(response) {
        console.log("Documents: ", response.results)
      }, function(err) {
        console.log("Something went wrong: ", err)
      })

      Object.keys(files).forEach(function(file){
        //console.log('##', file)
        //var data = files[file]
      })
      //console.log(metalsmith.metadata())
      done()
    }
  }

  // function debug() {
  //   return function(files, metalsmith, done) {
  //     Object.keys(files).forEach(function(file){
  //       console.log('##', file)
  //       //var data = files[file]
  //     })
  //     //console.log(metalsmith.metadata().navs)
  //     done()
  //   }
  // }
