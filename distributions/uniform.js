(function(define) {'use strict';
define(function(require) {

// uniform.js

   // requires both parameters with a < b
   return function(a, b) {
      return a + (b - a) * this.random();
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
