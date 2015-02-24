(function(define) {'use strict';
define(function(require) {

// gamma.js

   var exponential = require('./exponential');

   // Client calls one of three methods depending on alpha
   // alpha for 'shape', beta for 'scale'
   return function(alpha, beta) {
      if (alpha < 1) {
         return gammaBest.call(this, alpha, beta);
      }
      if (alpha > 1) {
         return gammaCheng.call(this, alpha, beta);
      }
      return exponential.call(this, 1 / beta);
   };

   // alpha < 1:  Best/Ahrens/Dieter Algorithm
   function gammaBest(alpha, beta) {
      var t, b;
      t = .07 + .75 * Math.sqrt(1 - alpha);
      b = 1 + Math.exp(-t) * alpha / t;

      return function() {
         var x, y, u1, u2, v;
         /* eslint-disable no-constant-condition */
         while (true) {
         /* eslint-enable */
            u1 = this.random();
            u2 = this.random();
            v = b * u1;
            if (v <= 1) {
               x = t * Math.pow(v, 1 / alpha);
               if (u2 <= (2 - x) / (2 + x) || u2 <= Math.exp(-x)) {
                  return x * beta;
               }
            } else {
               x = -Math.log(t * (b - v) / alpha);
               y = x / t;
               if (u2 * (alpha + y * (1 - alpha)) <= 1 ||
                   u2 <= Math.pow(y, alpha - 1))
               {
                  return x * beta;
               }
            }
         }
      }.bind(this);
   }

   // alpha > 1:  Cheng/Feast Algorithm
   function gammaCheng(alpha, beta) {
      var c1, c2, c3, c4;
      c1 = alpha - 1;
      c2 = (alpha - 1 / (6 * alpha)) / c1;
      c3 = 2 / c1;
      c4 = c3 + 2;

      return function() {
         var u1, u2, w;
         /* eslint-disable no-constant-condition */
         while (true) {
         /* eslint-enable */
            u1 = this.random();
            u2 = this.random();
            w = c2 * u2 / u1;
            if (c3 * u1 + w + 1 / w <= c4) {
               return c1 * w * beta;
            }
            if (c3 * Math.log(u1) - Math.log(w) + w < 1) {
               return c1 * w * beta;
            }
         }
      }.bind(this);
   }

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
