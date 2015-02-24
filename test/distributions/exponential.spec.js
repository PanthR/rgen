var expect = require('chai').expect;
var rgen = require('./../../rgen.js');

var print = true;  // Disable to reduce console.logs

describe('exponential', function() {
   it('returns integer values >= 0', function() {
      var i, v, f, n, l;
      n = 20;
      l = Math.random() * 10;
      f = rgen.exponential(l);
      for(i = 0; i < 300; i += 1) {
         v = f();
         expect(v).to.be.at.least(0);
      }
   });
});
