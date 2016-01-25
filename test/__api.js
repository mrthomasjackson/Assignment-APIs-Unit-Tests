request = require('supertest');

describe('API', function () {
    var server;

    beforeEach(function(){
        server = require('../src/server.js');
    });

    afterEach(function(){
        server.close();
    });

    it('"/api/v1" should load specified object.', function testHealth(done) {
        request(server)
            .get('/api/v1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {hello: 'World'}, done);
    });

});
