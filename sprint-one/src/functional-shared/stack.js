var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  storage = {};
  var instance = {};
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;

  return instance;
};

var storage = {};
var stackMethods = {};



stackMethods.push = function(value) {
  var currentKey = Object.keys(storage).length;
  while (currentKey > 0) {
    storage[currentKey] = storage[currentKey - 1];
    currentKey--;
  }
  storage[0] = value;
};

stackMethods.pop = function() {
  var poppedVal = storage[0];
  for (var key in storage) {
    if (key !== '0') {
      storage[key - 1] = storage[key];
    }
  }
  delete storage[Object.keys(storage).length - 1];
  return poppedVal;
};

stackMethods.size = function () {
  return (Object.keys(storage).length);
};

