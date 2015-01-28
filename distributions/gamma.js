(function(define) {'use strict';
define(function(require) {

// gamma.js

   var exponential = require('./exponential');

   // Client calls one of three methods depending on alpha
   // alpha for 'shape', beta for 'scale'
   return function(alpha, beta) {
      if (alpha < 1) {
         return gammaBest(alpha, beta);
      }
      if (alpha > 1) {
         return gammaCheng(alpha, beta);
      }
      return exponential(1 / beta);
   };

   // alpha < 1:  Best/Ahrens/Dieter Algorithm
   function gammaBest(alpha, beta) {
      var t, b, x, y, u1, u2, v;
      t = .07 + .75 * Math.sqrt(1 - alpha);
      b = 1 + Math.exp(-t) * alpha / t;
      /* eslint-disable no-constant-condition */
      while (true) {
      /* eslint-enable */
         u1 = this.random();
         u2 = this.random();
         v = b * u1;
         if (v <= 1) {
            x = t * Math.pow(v, 1 / alpha);
            if (u2 <= (2 - x) / (2 + x) || u2 <= Math.exp(-x)) {
               return x;
            }
            x = -Math.log(t * (b - v) / alpha);
            y = x / t;
            if (u2 * (alpha + y * (1 - alpha)) <= 1 ||
                u2 <= Math.pow(y, alpha - 1)) {
               return x;
            }
         }
      }
   }

   // alpha > 1:  Cheng/Feast Algorithm
   function gammaCheng(alpha, beta) {
      var u1, u2, v;
      /* eslint-disable no-constant-condition */
      while (true) {
      /* eslint-enable */
         u1 = this.random();
         u2 = this.random();
         v = (alpha - 1 / (6 * alpha)) * u1 / ((alpha - 1) * u2);
         if (2 * (u2 - 1) / (alpha - 1) + v + 1 / v <= 2 ||
             2 * Math.log(u2) / (alpha - 1) - Math.log(v) + v <= 1) {
            return (alpha - 1) * v;
         }
      }
   }

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));