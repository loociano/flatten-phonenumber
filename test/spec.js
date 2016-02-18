var assert = require('assert');
var converter = require('../src/converter');

describe('Telephone number conversion', function(){

  it('should remove spaces', function () {
    assert.equal('+44123456789', converter.convertPhoneNumber('+44 123 456 789'));
  });
});