const { assert } = require('chai');
const request = require('supertest');
const app = require('../app');
const usersService = require('../api/services/usersService');

const user = {
  email: 'juku@juurikas.ee',
  password: 'juku'
};

const newSubject = {
  name: 'New subject',
  lecturerId: 'p1ZqKXUhb6OUuuzf9FRq'
};

let subjectId;
let token;

before(async () => {
  token = await authService.login(user.email, user.password);
});

describe('GET /api/subjects', function() {
  it('responds with success: false and message', async function() {
    const res = await request(app)
      .get('/api/subjects');
    assert.equal(res.statusCode, 401);
    assert.isFalse(res.body.success);
  });
  it('responds with success: true and list of subjects', async function() {
    const res = await request(app)
      .get('/api/subjects')
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
    assert.ok(res.body.subjects);
  });
});