const { assert } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('GET /api/ping', function() {
  it('responds with success: true', async function() {
    const res = await request(app)
      .get('/api/ping');
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
  });
});