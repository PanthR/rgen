(function(define) {'use strict';
define(function(require) {

// exponential.js

   // Uses inverse cdf
   return function(lambda) {
      return function() {
         return -Math.log(this.random()) / lambda;
      }.bind(this);
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
