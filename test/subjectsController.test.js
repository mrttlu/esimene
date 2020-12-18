const { assert } = require('chai');
const request = require('supertest');
const app = require('../app');
const authService = require('../api/services/authService');

const user = {
  email: 'juku@juurikas.ee',
  password: 'juku'
};
let token;

describe('GET /api/subjects', function() {
  it('responds with success: false and message', async function() {
    const res = await request(app)
      .get('/api/subjects');
    assert.equal(res.statusCode, 401);
    assert.isFalse(res.body.success);
  });
  it('responds with success: true and list of subjects', async function() {
    token = await authService.login(user.email, user.password);
    const res = await request(app)
      .get('/api/subjects')
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
    assert.ok(res.body.subjects);
  });
  it('responds with success: true and subject', async function() {
    const res = await request(app)
      .get('/api/subjects/4FfQOOC7tUAeXDoD7Kdb')
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
    assert.ok(res.body.subject);
  });
});