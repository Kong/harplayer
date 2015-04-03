# harplayer [![wercker](https://img.shields.io/wercker/ci/551bc8323993a61109001091.svg)](https://app.wercker.com/#applications/551bc8323993a61109001091) [![NPM Version](https://img.shields.io/npm/v/harplayer.svg)](https://www.npmjs.com/package/harplayer)

Replays HAR log entries.

### Install

```sh
npm install harplayer
```

### Usage

```js
var harplayer = require('harplayer')

var har = require('./har.json')

harplayer.replayOne(har, 0, function(err, res, body){
  if (err) throw err
  console.log(res.statusCode + " " + res.statusMessage)
  // console.log(body)
})

harplayer.replayAll(har, function(err, res, body){
  if (err) throw err
  console.log(res.statusCode + " " + res.statusMessage)
  // console.log(body)
})

harplayer.replayAllInParallel(har, function(err, res, body){
  if (err) throw err
  console.log(res.statusCode + " " + res.statusMessage)
  // console.log(body)
})

```
