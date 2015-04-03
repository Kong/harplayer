var harplayer = require('../harplayer')
var Table = require('cli-table')
var ProgressBar = require('progress')
var filesize = require('file-size')

var har = require('./data/har.json')
var entries = har.log.entries
var el = entries.length
var intro = ' Replaying ' + el + ' HAR entries: [:bar] :percent :etas'
var bar = new ProgressBar(intro, {
  complete: '=',
  incomplete: ' ',
  width: 40,
  total: entries.length
})

var table = new Table({
  head: ['METHOD', 'STATUS', "URL", "SIZE", "TIME"],
  colWidths: [8, 8, 35, 12, 10],
  style: { head: ["cyan"]}
})

function createRows(har) {
  var entry = entries[0]
  var method = entry.request.method
  var url = entry.request.url.substring(0, 50)
  var start = new Date().getTime()
  harplayer.replayOne(har, 0, function(err, res, body){
    if (err) throw err
    var status = res.statusCode
    var size = filesize(Buffer.byteLength(body, 'utf8')).human()
    var time = (new Date().getTime() - start) + ' ms'
    var tr = [method, status, url, size, time]
    table.push(tr)
    har.log.entries.shift()
    bar.tick()
    if (entries.length === 0) {
      console.log(table.toString())
    } else {
      createRows(har)  
    }
  })
}

createRows(har)
