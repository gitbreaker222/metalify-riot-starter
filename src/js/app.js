/*
APP SETUP
*/
var app = {}
app.data = {}
app.services = {}
app.ctrl = {}
riot.observable(app)

// define event names, convention
app.evt = {
  init: 'init',
  appReady: 'appReade',
  contentLoaded: 'contentLoaded',
  contentReady: 'contentReady',
  error: 'error'
}

//init
app.one(app.evt.init, function () {
  riot.mount('*')
})
app.one(app.evt.appReady, function () {
  //load content
  var url = '/content.json'
  app.one(app.evt.contentLoaded, function (data) {
    app.data.content = JSON.parse(data)
    app.trigger(app.evt.contentReady)
  })
  app.load(url, app.evt.contentLoaded)
})
