(function(define) {'use strict';
define(function(require) {

// uniform.js

   // requires both parameters with a < b
   return function(a, b) {
      return function() {
         return a + (b - a) * this.random();
      }.bind(this);
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
