(function(define) {'use strict';
define(function(require) {

// poisson.js

   var lfactorial = require('panthrMath').lfactorial,
       inverseCDF = require('./inverseCDF');

   // Using inverseCDF
   function poissonInvCDF(lambda) {
      var mode;

      mode = { val: Math.floor(lambda) };
      mode.prob = Math.exp(-lambda + mode.val * Math.log(lambda) - lfactorial(mode.val));

      return inverseCDF.call(this,
         function getMode() { return mode; },
         function updateLeft() {
            if (this.val === 0) { return false; }
            this.prob *= this.val / lambda;
            this.val -= 1;
            return true;
         },
         function updateRight() {
            this.val += 1;
            this.prob *= lambda / this.val;
            return true;
         }
      );
   }

   return poissonInvCDF;
});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
