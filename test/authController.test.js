const { assert } = require('chai');
const request = require('supertest');
const app = require('../app');

const user = {
  email: 'juku@juurikas.ee',
  password: 'juku'
};

const wrongPassword = {
  email: 'juku@juurikas.ee',
  password: 'juhan'
};

const wrongUser = {
  email: 'juku@juku.ee',
  password: 'juku'
};

const missingEmail = {
  password: 'juku'
}

const missingPassword = {
  email: 'juku@juku.ee'
}

describe('POST /api/login', function() {
  it('responds with success: true and token', async function() {
    const res = await request(app)
      .post('/api/login')
      .send(user);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
    assert.ok(res.body.token);
  });
  it('responds with success: false and message because of wrong user', async function() {
    const res = await request(app)
      .post('/api/login')
      .send(wrongUser);
    assert.equal(res.statusCode, 401);
    assert.isFalse(res.body.success);
    assert.ok(res.body.message);
  });
  it('responds with success: false and message because of wrong password', async function() {
    const res = await request(app)
      .post('/api/login')
      .send(wrongPassword);
    assert.equal(res.statusCode, 401);
    assert.isFalse(res.body.success);
    assert.ok(res.body.message);
  });
  it('responds with success: false and message because of missing email', async function() {
    const res = await request(app)
      .post('/api/login')
      .send(missingEmail);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
    assert.equal(res.body.message, 'Required field(s) missing or invalid');
  });
  it('responds with success: false and message because of missing password', async function() {
    const res = await request(app)
      .post('/api/login')
      .send(missingPassword);
    assert.equal(res.statusCode, 400);
    assert.equal(res.body.message, 'Required field(s) missing or invalid');
    assert.isFalse(res.body.success);
  });
});