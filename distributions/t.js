(function(define) {'use strict';
define(function(require) {

// t.js

   return function(df) {
      return function() {
         var u1, u2, rsq;
         do {
            u1 = this.random() * 2 - 1;
            u2 = this.random() * 2 - 1;
            rsq = u1 * u1 + u2 * u2;
         } while (rsq >= 1);
         return u1 * Math.sqrt(df * ( Math.pow(rsq, -2 / df) - 1) / rsq);
      }.bind(this);
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
