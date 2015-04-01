var harplayer = require('../harplayer.js')
var har = require('./har.json')

harplayer.replayOne(har, 0, function(err, res, body){
	if (err) throw err
	console.log(res.statusCode + " " + res.statusMessage)
	console.log(body)
})

harplayer.replayAll(har, function(err, res, body){
	if (err) throw err
	console.log(res.statusCode + " " + res.statusMessage)
	console.log(body)
})
