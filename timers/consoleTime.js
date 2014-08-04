console.time("loopTime");
for(var i = 0; i < 10000000000; i++){
  i++;
}
// Writes out the time taken to complete the loop.
console.timeEnd("loopTime");
