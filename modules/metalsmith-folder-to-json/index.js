var fs = require('fs')
var path = require('path')

var metalsmith_plugin = function (opts) {

    // Initialise plugin with options.
    var dir = opts.folder
    var key = opts.nameInMetadata || 'folderJson'

    return function (files, metalsmith, done) {

        // Metalsmith metadata usage:
        var metadata = metalsmith.metadata();

        //https://stackoverflow.com/a/31831122/3313410
        var diretoryTreeToObj = function(dir, done) {
          var results = []

          fs.readdir(dir, function(err, list) {
            if (err)
              return done(err)

            var pending = list.length

            if (!pending)
              return done(null, {name: path.basename(dir), type: 'folder', children: results})

            list.forEach(function(file) {
              file = path.resolve(dir, file)
              fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                  diretoryTreeToObj(file, function(err, res) {
                    results.push({
                      name: path.basename(file),
                      type: 'folder',
                      children: res
                    })
                    if (!--pending)
                      done(null, results)
                  })
                }
                else {
                  results.push({
                    type: 'file',
                    name: path.basename(file)
                  })
                  if (!--pending)
                    done(null, results)
                }
              })
            })
          })
        }

        diretoryTreeToObj(dir, function(err, res){
          if(err) return done(err);
          metadata[key] = res
          metalsmith.metadata(metadata)
          done();
        })
    };
};

// Expose the plugin
module.exports = metalsmith_plugin;
