(function(define) {'use strict';
define(function(require) {

// distributions.js
   return {
      uniform: require('./distributions/uniform'),
      normal: require('./distributions/normal'),
      binomial: require('./distributions/binomial'),
      discrete: require('./distributions/discrete'),
      exponential: require('./distributions/exponential'),
      gamma: require('./distributions/gamma'),
      chisquared: require('./distributions/chisquared')
   };

});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
