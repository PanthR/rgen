// sampleDistributions.js
// Reads specifications and generate random numbers
// from the specified distributions

var specification = {
   "filename": "sampleResults.json",
   "sampleSize": 20000,
   "distributions": {
      "normal": {
         "function": "normal",
         "rfunction": "rnorm",
         "params": [
            { "name": "mean", "value": 0 },
            { "name": "sd"  , "value": 1 }
         ]
      },
      "uniform": {
         "function": "uniform",
         "rfunction": "runif",
         "params": [
            { "name": "min", "value": 1 },
            { "name": "max", "value": 3 }
         ]
      },
      "gamma.large.alpha": {
         "function": "gamma",
         "rfunction": "rgamma",
         "params": [
            { "name": "shape", "value": 3 },
            { "name": "scale", "value": 0.2 }
         ]
      },
      "gamma.small.alpha": {
         "function": "gamma",
         "rfunction": "rgamma",
         "params": [
            { "name": "shape", "value": 0.2 },
            { "name": "scale", "value": 0.2 }
         ]
      },
      "binomial": {
         "function": "binomial",
         "rfunction": "rbinom",
         "params": [
            { "name": "size", "value": 40 },
            { "name": "prob", "value": 0.35 }
         ]
      },
      "exponential": {
         "function": "exponential",
         "rfunction": "rexp",
         "params": [
            { "name": "rate", "value": 3 }
         ]
      },
      "chisquared": {
         "function": "chisquared",
         "rfunction": "rchisq",
         "params": [
            { "name": "df", "value": 10 }
         ]
      },
      "t": {
         "function": "t",
         "rfunction": "rt",
         "params": [
            { "name": "df", "value": 10 }
         ]
      }
   }
};

var fs = require('fs');

var rgen = require('./../rgen');
var results = {};
var reps = specification.sampleSize;

Object.keys(specification.distributions).forEach(function(key) {
   console.log("Simulating: " + key);
   var arr, time, spec, params, func;
   time = new Date();
   spec = specification.distributions[key];
   params = spec.params.map(function(o) { return o.value; });
   func = rgen[spec.function].apply(rgen, params);
   arr = [];
   while (arr.length < reps) {
      arr.push(func());
   }
   results[key] = {
      "params": spec.params,
      "func": spec.rfunction,
      "values": arr
   };
   console.log("Done in: " + (new Date() - time) + "ms");
});


console.log("Writing file ...");
fs.writeFile(specification.filename, JSON.stringify(results), function(err) {
   if (err) {
      console.error("Error:", err);
   } else {
      console.log("Done.");
   }
});

