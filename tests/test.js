var assert = require('assert')
var nock = require('nock')
var harplayer = require('../harplayer')
var har = require('./data/har.json')

var nockServer = nock('http://localhost:9876')
nockServer.get('/ok').reply(200).persist()
nockServer.get('/redirect').reply(301).persist()
nockServer.get('/fail').reply(501).persist()

describe('replayOne', function(){
  describe('responseCode', function(){
    it('should return 200', function(done){
      harplayer.replayOne(har, 0, function(err, res, body){
        assert.equal(res.statusCode, 200);
        done();
      })
    })
    it('should return 301', function(done){
      harplayer.replayOne(har, 1, function(err, res, body){
        assert.equal(res.statusCode, 301);
        done();
      })
    })
    it('should return 501', function(done){
      harplayer.replayOne(har, 2, function(err, res, body){
        assert.equal(res.statusCode, 501);
        done();
      })
    })
  })
})
