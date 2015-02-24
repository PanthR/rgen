(function(define) {'use strict';
define(function(require) {

// discrete.js

   // Generates randoms from a discrete distribution given the cdf
   // Assumes that the probs in the array are non-negative and add to 1.
   // Returns integer values in the range [0, arr.length - 1]

   // Uses chop-down search
   return function(arr) {
      return function() {
         var u, k;
         u = this.random();
         k = 0;
         while (u > arr[k]) {
            u -= arr[k];
            k += 1;
         }
         return k;
      }.bind(this);
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
