var expect = require('chai').expect;
var rgen = require('./../../rgen.js');

var print = true;  // Disable to reduce console.logs

describe('uniform', function() {
   it('returns values in [a, b]', function() {
      var i, f, a, b;
      a = Math.random();
      b = a + 5 * Math.random();
      f = rgen.uniform(a, b);
      for(i = 0; i < 100; i += 1) {
         expect(f()).to.be.within(a, b);
      }
   });
});
