var request = require('request')

module.exports = {
  replayOne: function(har, index, callback) {
    send(har.log.entries[index].request, callback)
  }, 
  replayAll: function(har, callback) {
    oneByOne(har.log.entries, send, callback)
  }
}

function send(harr, callback) {
  var options = {
    method: harr.method,
    uri: harr.url,
    har:  harr
  }

  request(options, function(err, res, body) {
    callback(err, res, body)
  })
}

function oneByOne(items, fun, callback) {
  fun(items[0].request, callback)
  items.shift()
  if (items.length === 0) return
  oneByOne(items, fun, callback)  
}
