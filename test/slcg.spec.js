var testUtils = require('./testUtils');
var expect = require('chai').expect;
var rgen = require('../rgen.js');

var print = true;  // Disable to reduce console.logs

describe('slcg', function() {
   rgen.setAlgorithm('slcg');
   var slcg = rgen.random.bind(rgen);
   it('gives uniform results', function() {
      expect(testUtils.testUniform(slcg, print)).to.equal(true);
   });
});
