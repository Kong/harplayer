var harplayer = require('../harplayer')
var har = require('./data/har.json')

harplayer.replayAllInParallel(har, function(err, res, body){
  if (err) throw err
  console.log(res.statusCode + " " + res.statusMessage)
  // console.log(body)
})
