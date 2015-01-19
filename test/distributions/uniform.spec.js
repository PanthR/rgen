var expect = require('chai').expect;
var rgen = require('./../../rgen.js');

var print = true;  // Disable to reduce console.logs

describe('uniform', function() {
   it('returns values in [a, b]', function() {
      var i;
      var a = Math.random();
      var b = a + 5 * Math.random();
      for(i = 0; i < 100; i += 1) {
         expect(rgen.uniform(a, b)).to.be.within(a, b);
      }
   });
});
