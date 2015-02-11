// sampleDistributions.js
// Reads specifications and generate random numbers
// from the specified distributions

var specification = {
   "filename": "sampleResults.json",
   "sampleSize": 5000,
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
            { "name": "size", "value": 20 },
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
      }
   }
};

var fs = require('fs');

var rgen = require('./../rgen');
var results = {}, arr;
var reps = specification.sampleSize;

Object.keys(specification.distributions).forEach(function(key) {
   console.log("Simulating: " + key);
   var time = new Date();
   var spec = specification.distributions[key];
   var func = rgen[spec.function];
   var params = spec.params.map(function(o) { return o.value; });
   arr = [];
   while (arr.length < reps) {
      arr.push(func.apply(rgen, params));
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

