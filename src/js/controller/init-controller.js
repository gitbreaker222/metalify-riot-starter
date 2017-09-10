app.init = function () {
  riot.mount('*')
  var url = '/content.json'
  app.one(app.evt.contentReady, function (data) {
    app.content = JSON.parse(data)
  })
  app.load(url, app.evt.contentReady)
}
