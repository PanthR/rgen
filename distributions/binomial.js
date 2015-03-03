(function(define) {'use strict';
define(function(require) {

// binomial.js

   var lbinomProb = require('panthrMath').lbinomProb,
       inverseCDF = require('./inverseCDF');

   // Using inverseCDF
   function bernoulliInvCDF(n, p) {
      var mode;

      mode = { val: Math.floor(n * p) };
      mode.prob = Math.exp(lbinomProb(n, p, mode.val));

      return inverseCDF.call(this,
         function getMode() { return mode; },
         function updateLeft() {
            if (this.val === 0) { return false; }
            this.prob *= this.val / (n - this.val + 1) * ((1 - p) / p);
            this.val -= 1;
            return true;
         },
         function updateRight() {
            if (this.val === n) { return false; }
            this.prob *= (n - this.val) / (this.val + 1) * (p / (1 - p));
            this.val += 1;
            return true;
         }
      );
   }

   // Sum of repeated Bernoulli trials
   function bernoulliDirect(n, p) {
      return function() {
         var k, i;
         k = 0;
         for (i = 0; i < n; i += 1) {
            k += this.random() < p ? 1 : 0;
         }
         return k;
      };
   }

   return function(n, p) {
      if (n < 30) {
         return bernoulliDirect(n, p).bind(this);
      }
      return bernoulliInvCDF.call(this, n, p);
   };
});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
