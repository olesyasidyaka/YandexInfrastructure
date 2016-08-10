var assert = require('assert');
const getFace = require('cool-ascii-faces');

describe('Face', function() {
  describe('#face', function() {
    it('should return not empty string', function() {
      assert.notEqual("", getFace());
    });
    it('should not return NaN', function() {
      assert(isNaN(getFace()));
    });
  });
});