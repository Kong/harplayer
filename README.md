# harplayer 

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
