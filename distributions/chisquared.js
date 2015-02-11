(function(define) {'use strict';
define(function(require) {

// chisquared.js

   var gamma = require('./gamma');

   return function(df) {
      return gamma.call(this, df / 2, 2);
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
