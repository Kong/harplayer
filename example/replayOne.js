var harplayer = require('../harplayer')
var har = require('./har.json')

harplayer.replayOne(har, 0, function(err, res, body){
  if (err) throw err
  console.log(res.statusCode + " " + res.statusMessage)
  // console.log(body)
})
