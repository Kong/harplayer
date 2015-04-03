var mocha = require('mocha')
var assert = require('assert')
var nock = require('nock')
var harplayer = require('../harplayer')
var har = require('./data/har.json')

var nockServer = nock('http://localhost:9876')
nockServer.get('/ok').reply(200).persist()
nockServer.get('/redirect').reply(301).persist()
nockServer.get('/fail').reply(501).persist()

describe('replayOne', function(){
  describe('responseCodes', function(){
    it('should return 200', function(done){
      harplayer.replayOne(har, 0, function(err, res, body){
        assert.equal(res.statusCode, 200)
        done()
      })
    })
    it('should return 301', function(done){
      harplayer.replayOne(har, 1, function(err, res, body){
        assert.equal(res.statusCode, 301)
        done()
      })
    })
    it('should return 501', function(done){
      harplayer.replayOne(har, 2, function(err, res, body){
        assert.equal(res.statusCode, 501)
        done()
      })
    })
  })
})

describe('replayAllInParallel', function(){
  describe('responseCodes', function(){
    it('should return the correct amount', function(done){
      var count = 0
      harplayer.replayAllInParallel(har, function(err, res, body){
        count++
        if (count === 3) done()
      })
    })
  })
})

describe('replayAll', function(){
  describe('responseCodes', function(){
    it('should return correct order', function(done){
      var index = 0, codes = [200, 301, 501]
      harplayer.replayAll(har, function(err, res, body){
        assert.equal(res.statusCode, codes[index++])
        if (index === codes.length) done()
      })
    })
  })
})
