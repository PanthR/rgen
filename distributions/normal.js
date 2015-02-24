(function(define) {'use strict';
define(function(require) {

// normal.js

   // Uses rejection polar method for normal variates
   return function(mu, sigma) {
      return function() {
         var v1, v2, rsq;
         do {
            v1 = 2 * this.random() - 1;
            v2 = 2 * this.random() - 1;
            rsq = v1 * v1 + v2 * v2;
         } while (rsq >= 1);
         return mu + sigma * v1 * Math.sqrt(-2 * Math.log(rsq) / rsq);
      }.bind(this);
   };
});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
