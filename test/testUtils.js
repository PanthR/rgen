// Test utils

function perfectEntropy(k, p) {
   return (- k * p * Math.log(p));
}

function entropy(arr) {
   return arr.reduce(function(acc, p) {
      return acc - p * Math.log(p);
   }, 0);
}

function testUniform(f, print) {
   var N, k;
   var seq, intArray, freqs, i, val;
   var entropyThreshold, entropyDiff;
   N = 100000;
   k = 40;
   entropyThreshold = 0.0003;
   seq = [], i;
   intArray = [];
   for (i = 0; i < k; i += 1) { intArray.push(0); }
   for (i = 0; i < N; i += 1) {
      val = f();
      seq.push(val);
      intArray[Math.floor(val * k)] += 1;
   }
   freqs = intArray.map(function(v) { return v / N; });
   entropyDiff = perfectEntropy(k, 1 / k) - entropy(freqs);
   if (print) {
      console.log("Entropy Difference: ", entropyDiff);
   }
   return entropyDiff < entropyThreshold;
}

module.exports = {
   testUniform: testUniform
};
