var harplayer = require('../harplayer.js')
var har = require('./har.json')

harplayer.replayOne(har, 0, function(e, r, b){
	if (e) throw e
	console.log(r.statusCode + " " + r.statusMessage)
})

harplayer.replayAll(har, function(e, r, b){
	if (e) throw e
	console.log(r.statusCode + " " + r.statusMessage)
})
