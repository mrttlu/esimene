const hashService = require('./hashService');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const password = 'kjhasfdlkjbwelfuihaskdvnb';
const wrongPassword = 'sdfsfsfd';

test('Returns hashed password', async () => {
  const hash = await hashService.hash(password);
  const match = await bcrypt.compare(password, hash)
  expect(match).toBe(true);
});

test('Matches password and hash', async () => {
  const hash = await bcrypt.hash(password, saltRounds);
  const match = await hashService.compare(password, hash)
  expect(match).toBe(true);
});

test('Returns hashed password but compares to wrong password', async () => {
  const hash = await hashService.hash(password);
  const match = await bcrypt.compare(wrongPassword, hash)
  expect(match).toBe(false);
});

test('Returns false match', async () => {
  const hash = await hashService.hash(password);
  const match = await bcrypt.compare(wrongPassword, hash)
  expect(match).toBe(false);
});