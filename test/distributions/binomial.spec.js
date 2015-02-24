var expect = require('chai').expect;
var rgen = require('./../../rgen.js');

var print = true;  // Disable to reduce console.logs

describe('binomial', function() {
   it('returns integer values in [0, n]', function() {
      var i, v, f, n, p;
      n = 20;
      p = Math.random();
      f = rgen.binomial(n, p);
      for(i = 0; i < 100; i += 1) {
         v = f();
         expect(v).to.be.within(0, n);
         expect(Math.floor(v)).to.equal(v);
      }
   });
});
