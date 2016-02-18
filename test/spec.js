var assert = require('assert');
var converter = require('../src/converter');

describe('Telephone number conversion', function(){

  it('should remove spaces', function () {
    assert.equal('+44123456789', converter.convertPhoneNumber('+44 123 456 789'));
  });

  it('should convert international code to plus form', function () {
    assert.equal('+44123456789', converter.convertPhoneNumber('0044123456789'));
  });

  it('should ignore spaces and symbols', function () {
    assert.equal('+44123456789', converter.convertPhoneNumber('+44 123-45x6789'));
  });

  it('should ignore numbers in brackets', function () {
    assert.equal('+44123456789', converter.convertPhoneNumber('+44(0)123456789'));
  });

});