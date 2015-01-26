(function(define) {'use strict';
define(function(require) {

// binomial.js

   // Sum of repeated Bernoulli trials
   return function(n, p) {
      var k, i;
      k = 0;
      for (i = 0; i < n; i += 1) {
         k += this.random() < p ? 1 : 0;
      }
      return k;
   };
});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
