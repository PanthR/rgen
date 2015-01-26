(function(define) {'use strict';
define(function(require) {

// exponential.js

   // Uses inverse cdf
   return function(lambda) {
      return -Math.log(this.random()) / lambda;
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
