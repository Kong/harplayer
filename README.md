# harplayer [![](https://img.shields.io/wercker/ci/551bc8323993a61109001091.svg)](https://app.wercker.com/#applications/551bc8323993a61109001091) [![](https://img.shields.io/coveralls/Mashape/harplayer.svg)](https://coveralls.io/r/Mashape/harplayer) [![](https://img.shields.io/npm/v/harplayer.svg)](https://www.npmjs.com/package/harplayer)

Replay [HAR](http://www.softwareishard.com/blog/har-12-spec/) log entries to debug and visualize http services.

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
  console.log(res.statusCode)
})

harplayer.replayAll(har, function(err, res, body){
  if (err) throw err
  console.log(res.statusCode)
})

harplayer.replayAllInParallel(har, function(err, res, body){
  if (err) throw err
  console.log(res.statusCode)
})
```

### Contributing

[Feedback](https://github.com/Mashape/harplayer/issues) and [pull requests](https://github.com/Mashape/harplayer/pulls) are most welcomed. 

### MIT license

Copyright (c) 2015, Mashape (https://www.mashape.com/)
