var expect = require('chai').expect;
var rgen = require('./../../rgen.js');

var print = true;  // Disable to reduce console.logs

describe('normal', function() {
   it('runs', function() {
      var i;
      for(i = 0; i < 1000; i += 1) {
         expect(function() { rgen.normal(0, 1); }).to.not.throw(Error);
      }
   });
});
