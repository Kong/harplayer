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

harplayer.replayOne(har, 0, function(e, r, b){
  if (e) throw e
  console.log(r.statusCode + " " + r.statusMessage)
})

harplayer.replayAll(har, function(e, r, b){
  if (e) throw e
  console.log(r.statusCode + " " + r.statusMessage)
})

```
