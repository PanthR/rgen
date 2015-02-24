(function(define) {'use strict';
define(function(require) {

// binomial.js

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
      return bernoulliDirect(n, p).bind(this);
   };
});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
