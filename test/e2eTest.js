var repo = require('../test/memory')();
var app = require('../app')(repo);
var assert = require('assert');
var request = require('supertest');

describe('Book inventory', function(){
    it('allows to stock up the items', function(done){
        request(app)
            .post('/stock')
            .send({
                "isbn": 345354353543,
                "count": 10
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                assert.equal(res.body.isbn, 345354353543);
                done();
            })
    })
})