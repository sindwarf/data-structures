var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  storage = {};
  var instance = {};
  instance.size = queueMethods.size;
  instance.dequeue = queueMethods.dequeue;
  instance.enqueue = queueMethods.enqueue;

  return instance;
};

var storage = {};
var queueMethods = {};

queueMethods.enqueue = function(value) {
  storage[Object.keys(storage).length] = value;
};

queueMethods.dequeue = function() {
  var retVal = storage[0];
  debugger;
  for (var key in storage) {
    if (key !== '0') {
      storage[key - 1] = storage[key];
    }
  }
  delete storage[Object.keys(storage).length - 1];
  return retVal;
};

queueMethods.size = function() {
  return Object.keys(storage).length;
};


