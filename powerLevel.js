var powerLevel = function(inLevel){
  return inLevel > 9000 ? "It's over 9000!!!" : inLevel;
};

var transform = function(inLevel){
  return inLevel * 10;
};

// Make the powerLevel function available to an object that calls
// require('powerLevel.js');
module.exports = powerLevel;
