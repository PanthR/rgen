var expect = require('chai').expect;
var rgen = require('./../../rgen.js');
var inverseCDF = require('./../../distributions/inverseCDF.js');

var print = true;  // Disable to reduce console.logs

describe('inverseCDF', function() {
   it('returns values with expected frequences for a simple example', function() {
      // consider p(0) = .2, p(1) = .5, p(2) = .3
      function getMode() {
         return { val: 1, prob: .5 };
      }
      function updateLeft() {
         // can't go left of 0
         if (this.val === 0) { return false; }
         this.val = 0;
         this.prob = .2;
         return true;
      }
      function updateRight() {
         if (this.val === 2) { return false; }
         this.val = 2;
         this.prob = .3;
         return true;
      }
      rgen.testFunction = inverseCDF(getMode, updateLeft, updateRight);
      var arr = [];
      for (var i = 0; i < 10000; i += 1) {
         arr.push(rgen.testFunction());
      }
      console.log("mean is", arr.reduce(function(acc, v) {
         return acc + v;
      }, 0) / arr.length);
      // for(i = 0; i < 10; i++) {
      //    console.log(arr[i]);
      // }
   });
});
