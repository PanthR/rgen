(function(define) {'use strict';
define(function(require) {

// distributions.js
   return {
      uniform: require('./distributions/uniform'),
      normal: require('./distributions/normal')
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
