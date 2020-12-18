const { assert } = require('chai');
const hashService = require('../api/services/hashService');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../config');

const password = 'sigrimigri';
const wrongPassword = 'migrisigri';

describe('Hash service', function() {
  describe('Hash', function() {
    it('should return hashed password', async function() {
      const hash = await hashService.hash(password);
      const match = await bcrypt.compare(password, hash);
      assert.isTrue(match);
    });
    it('should return false because of wrong password', async function() {
      const hash = await hashService.hash(password);
      const match = await bcrypt.compare(wrongPassword, hash);
      assert.isFalse(match);
    });
    it('should return true', async function() {
      const hash = await bcrypt.hash(password, saltRounds);
      const match = await hashService.compare(password, hash);
      assert.isTrue(match);
    });
    it('should return false', async function() {
      const hash = await bcrypt.hash(password, saltRounds);
      const match = await hashService.compare(wrongPassword, hash);
      assert.isFalse(match);
    });
  });
});