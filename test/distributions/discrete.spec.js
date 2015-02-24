var expect = require('chai').expect;
var rgen = require('./../../rgen.js');

var print = true;  // Disable to reduce console.logs

describe('discrete', function() {
   it('returns integer values in [0, len - 1]', function() {
      var i, v, n, parr;
      n = 20;
      parr = [0.35, 0.15, 0.5];
      f = rgen.discrete(parr);
      for(i = 0; i < 300; i += 1) {
         v = f();
         expect(v).to.be.within(0, parr.length - 1);
         expect(Math.floor(v)).to.equal(v);
      }
   });
});
