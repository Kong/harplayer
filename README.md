# harplayer ![wercker](https://img.shields.io/wercker/ci/551bc8323993a61109001091.svg) ![NPM Version](https://img.shields.io/npm/v/harplayer.svg)

Replay HAR logs.

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
  console.log(body)
})

harplayer.replayAll(har, function(err, res, body){
  if (err) throw err
  console.log(res.statusCode + " " + res.statusMessage)
  console.log(body)
})

```
