const { assert } = require('chai');
const request = require('supertest');
const app = require('../app');
const authService = require('../api/services/authService');

const path = '/api/users';

const user = {
  email: 'juku@juurikas.ee',
  password: 'juku'
};

const newUser = {
  firstName: 'Uncle',
  lastName: 'Heino',
  email: 'uncle@heino.ee',
  password: 'uncle'
};

const nonExistingUserId = 'lksjdflksjdflksjd';
let userId;
let token;

before(async () => {
  token = await authService.login(user.email, user.password);
});

describe(`POST ${ path }`, () => {
  it('creates new user and responds with success: true and userId', async () => {
    const res = await request(app)
      .post(path)
      .send(newUser);
    assert.equal(res.statusCode, 201);
    assert.isTrue(res.body.success);
    assert.ok(res.body.id);
    userId = res.body.id;
  });
  it('responds with success: false because of insufficient data', async () => {
    const res = await request(app)
      .post(path)
      .send({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email'
      });
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
});

describe(`PUT ${ path }`, () => {
  it('updates new user and responds with success: true', async () => {
    const res = await request(app)
      .put(path)
      .set('Authorization', 'Bearer ' + token)
      .send({
        id: userId,
        firstName: 'Onu'
      });
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
  });
  it('responds with success: false because of nonexisting user', async () => {
    const res = await request(app)
      .put(path)
      .set('Authorization', 'Bearer ' + token)
      .send({
        id: nonExistingUserId,
        firstName: 'Onu'
      });
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
  it('responds with success: false because of no id', async () => {
    const res = await request(app)
      .put(path)
      .set('Authorization', 'Bearer ' + token)
      .send({
        firstName: 'Onu'
      });
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
});

describe(`GET ${ path }`, () => {
  it('Responds with success: true and list of users', async () => {
    const res = await request(app)
      .get(path)
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
    assert.ok(res.body.users);
  });
});

describe(`GET ${ path }/:id`, () => {
  it('Responds with success: true and user data', async () => {
    const res = await request(app)
      .get(`${ path }/${ userId }`)
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
    assert.ok(res.body.user);
  });
  it('Responds with success: false because of nonexisting user', async () => {
    const res = await request(app)
      .get(`${ path }/${ nonExistingUserId }`)
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
  it('Responds with success: false because of nonvalid id', async () => {
    const res = await request(app)
      .get(`${ path }/aa`)
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
});

describe(`DELETE ${ path }`, () => {
  it('deletes created user and responds with success: true', async () => {
    const res = await request(app)
      .delete(path)
      .set('Authorization', 'Bearer ' + token)
      .send({ id: userId });
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
  });
  it('responds with success: false because of nonexisting user', async () => {
    const res = await request(app)
      .delete(path)
      .set('Authorization', 'Bearer ' + token)
      .send({ id: nonExistingUserId });
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
  it('responds with success: false because of  no id', async () => {
    const res = await request(app)
      .delete(path)
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 400);
    assert.isFalse(res.body.success);
  });
});

