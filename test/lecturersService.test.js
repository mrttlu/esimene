const { assert } = require('chai');
const lecturersService = require('../api/services/lecturersService');
const usersService = require('../api/services/usersService');

const lecturer = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'firstName@lastName.ee'
};
nonExistingId = 'kjshdfkjshfksj';

let lecturerId;
let userId;

before(async () => {
  const users = await usersService.read();
  userId = users[0].id;
  lecturer.userId = userId;
});

describe('Lecturers service', () => {
  describe('Create', () => {
    it('should create new lecturer and return lecturers id', async () => {
      const id = await lecturersService.create(lecturer);
      assert.ok(id);
      lecturerId = id;
    });
    it('should return false because of missing data', async () => {
      const id = await lecturersService.create();
      assert.isFalse(id);
    });
  });
  describe('Read', () => {
    it('should return list of lecturers', async () => {
      const users = await lecturersService.read(userId);
      assert.ok(users);
    });
  });
  describe('Read By Id', () => {
    it('should return lecturer', async () => {
      const user = await lecturersService.readById(lecturerId);
      assert.ok(user);
    });
    it('should return false because of wrong id', async () => {
      const user = await lecturersService.readById(nonExistingId);
      assert.isFalse(user);
    });
  });
  describe('Update', () => {
    it('should update lecturer and return true', async () => {
      const result = await lecturersService.update({ ... lecturer, id: lecturerId }, userId);
      assert.isTrue(result);
    });
    it('should update lecturer firstName and return true', async () => {
      const result = await lecturersService.update({ firstName: 'FirstName', id: lecturerId }, userId);
      assert.isTrue(result);
    });
    it('should update lecturer lastName and return true', async () => {
      const result = await lecturersService.update({ lastName: 'lastName', id: lecturerId }, userId);
      assert.isTrue(result);
    });
    it('should update lecturer email and return true', async () => {
      const result = await lecturersService.update({ email: 'email', id: lecturerId }, userId);
      assert.isTrue(result);
    });
    it('should return false because of missing userId', async () => {
      const result = await lecturersService.update({ ... lecturer, id: lecturerId });
      assert.isFalse(result);
    });
    it('should return false because of missing lecturer', async () => {
      const result = await lecturersService.update(userId);
      assert.isFalse(result);
    });
    it('should return false because of nonexisting userId', async () => {
      const result = await lecturersService.update({ ... lecturer, id: lecturerId }, nonExistingId);
      assert.isFalse(result);
    });
  });
  describe('Delete', () => {
    it('should delete lecturer and return true', async () => {
      const result = await lecturersService.delete(lecturerId, userId);
      assert.isTrue(result);
    });
    it('should return false because of missing lecturerId', async () => {
      const result = await lecturersService.delete(userId);
      assert.isFalse(result);
    });
    it('should return false because of missing userId', async () => {
      const result = await lecturersService.delete(lecturerId);
      assert.isFalse(result);
    });
    it('should return false because of nonexisting lecturerId', async () => {
      const result = await lecturersService.delete(nonExistingId, userId);
      assert.isFalse(result);
    });
    it('should return false because of nonexisting userId', async () => {
      const result = await lecturersService.delete(lecturerId, nonExistingId);
      assert.isFalse(result);
    });
  });
});