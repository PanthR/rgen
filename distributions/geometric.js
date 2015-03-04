(function(define) {'use strict';
define(function(require) {

// geometric.js

   var exponential = require('./exponential');

   // Geometric starting at x = 0
   // As integer part of appropriate exponential
   // 0 < p <= 1
   return function(p) {
      var exp = exponential.call(this, -Math.log(1 - p));
      return function() {
         return Math.floor(exp.call(this));
      }.bind(this);
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
