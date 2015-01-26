(function(define) {'use strict';
define(function(require) {

// distributions.js
   return {
      uniform: require('./distributions/uniform'),
      normal: require('./distributions/normal'),
      binomial: require('./distributions/binomial'),
      discrete: require('./distributions/discrete'),
      exponential: require('./distributions/exponential')
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
