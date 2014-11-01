process.stdin.on('data',function(data){
  console.log("Console input: " + data);
});

process.on('SIGBREAK', function(){
  console.log("SIGBREAK only works on Windows...");
});

// Illegal in linux. Won't compile.
process.on('SIGQUIT', function(){
  console.log("CTRL+4 has no power here!");
});

process.on('SIGINT', function(){
  console.log("CTRL+C has no power here!");
});

process.on('exit', function(){
  console.log("CTRL+D will let you leave.");
});
