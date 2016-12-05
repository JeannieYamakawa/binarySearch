var expect = require( 'chai' ).expect;
const searchFunct = require( './binary' );
var myArr = [1,3,4,6,7,10];
var nonNum = 5;
var num = 7;

describe('binary search', function() {
  describe('binary search', function() {
    it('should return false when the value is not present', function() {
      expect(searchFunct.binarySearch(myArr, nonNum)).to.equal(false);
    });
    it('should return true when the value is present', function() {
      expect(searchFunct.binarySearch(myArr, num)).to.equal(true);
    });
  });
});
