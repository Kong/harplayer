var assert = require("assert")
var harplayer = require("./harplayer")
var har = require('./example/har.json')

describe('replayOne', function(){
  describe('responseCode', function(){
    it('should return 200', function(done){
      harplayer.replayOne(har, 0, function(err, res, body){
        assert.equal(res.statusCode, 200);
        done();
      })
    })
  })
})
