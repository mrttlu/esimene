const { assert } = require('chai');
const homeworksService = require('../api/services/homeworksService');
const subjectsService = require('../api/services/subjectsService');
const usersService = require('../api/services/usersService');

const homework = {
  name: 'Test homework',
  lecturerId: '88tpZFKhEm4OJeSNbVuH'
};
const nonExistingId = 'kjshdfkjshfksj';

let homeworkId;
let userId;
let subjectId;

before(async () => {
  const users = await usersService.read();
  userId = users[0].id;
  const subjects = await subjectsService.read(userId);
  subjectId = subjects[0].id;
});

describe('Homeworks service', () => {
  describe('Create', () => {
    it('should create new homework and return homeworks id', async () => {
      const id = await homeworksService.create(homework, userId, subjectId);
      assert.ok(id);
      homeworkId = id;
    });
    it('should return false because of missing homework', async () => {
      const id = await homeworksService.create(userId, subjectId);
      assert.isFalse(id);
    });
    it('should return false because of missing userId', async () => {
      const id = await homeworksService.create(homework, subjectId);
      assert.isFalse(id);
    });
    it('should return false because of missing subjectId', async () => {
      const id = await homeworksService.create(homework, userId);
      assert.isFalse(id);
    });
  });
  describe('Read', () => {
    it('should return list of homeworks', async () => {
      const homeworks = await homeworksService.read(userId);
      assert.ok(homeworks);
    });
  });
  describe('Read By Id', () => {
    it('should return homework by id', async () => {
      const homework = await homeworksService.readById(homeworkId, userId);
      assert.ok(homework);
    });
    it('should return false because of wrong id', async () => {
      const homework = await homeworksService.readById(nonExistingId, userId);
      assert.isFalse(homework);
    });
    it('should return false because of missing id', async () => {
      const homework = await homeworksService.readById(userId);
      assert.isFalse(homework);
    });
    it('should return false because of missing userId', async () => {
      const homework = await homeworksService.readById(nonExistingId);
      assert.isFalse(homework);
    });
  });
});