(function(define) {'use strict';
define(function(require) {

   /*
    * Random number generators for PanthR
    * @module rgen
    * @version 0.0.1
    * @author Haris Skiadas <skiadas@hanover.edu>
    * Barb Wahl <wahl@hanover.edu>
    */

   /*
    Some thoughts...
    Each algorithm is for a uniform distribution on [0, 1].  Different
    algorithms exist with various tradeoffs.

    an algorithm needs to be able to provide:
       - settings for use at creation
       - setSeed function
       - random function

    rgen will be a single object with
       - algorithms property
       - setAlgorithm function
       - distributions property (uniform, normal, etc.)
       - setSeed function (from the current algorithm)
       - random function (from the current algorithm)

    once a specific algorithm has been set, commands such as
    rgen.setSeed or rgen.random will use that algorithm
   */

   var rgen;
   rgen = {
      algorithms: {},
      distributions: {},
      setSeed: function(i) {
         throw new Error('need to select an algorithm first');
         // return rgen;
      },
      random: function() {
         throw new Error('need to select an algorithm first');
      },
      setAlgorithm: function(name) {
         // "name" encapsulates some simple options like precision
         mixin(rgen, rgen.algorithms[name]);
         return rgen.setRandomSeed();
      },
      getAlgorithms: function() {
         return Object.keys(rgen.algorithms);
      }
   };

   rgen.setRandomSeed = function() {
      return rgen.setSeed(new Date());
   };

   return rgen;
});

}(typeof define === 'function' && define.amd ? define : function(factory) {
   'use strict';
   module.exports = factory(require);
}));
