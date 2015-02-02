library(rjson)
filename = "sampleResults.json"
results = fromJSON(file = filename, method = "C")

processDistr = function(n) {
   args = paste(sapply(n$params, function(param) {paste(param$name, "=", param$value, sep="") }), collapse=", ")
   count = length(n$values)
   command = paste(n$func, "(", count, ",", args, ")", sep="")
   list(command=parse(text=command),
        result.r = eval(parse(text=command)),
        result.js = n$values)
}
processed = lapply(results, processDistr)
summaries = lapply(processed, function(distr) { sapply(distr, summary )})
plotDistr = function(distr) {
   h1 = hist(distr$result.r, plot=FALSE)
   h2 = hist(distr$result.js, plot=FALSE)
   h2$counts = - h2$counts
   hmax = max(h1$counts)
   hmin = min(h2$counts)
   X = c(h1$breaks, h2$breaks)
   xmax = max(X)
   xmin = min(X)
   plot(h1, ylim=c(hmin, hmax), col="green", xlim=c(xmin, xmax))
   lines(h2, col="blue")
}
ncols = 3
nrows = ceiling(length(processed) / ncols)
png("backToBack.png")
par(mfrow= c(nrows, ncols))
for (distr in processed) { plotDistr(distr); }
dev.off()
