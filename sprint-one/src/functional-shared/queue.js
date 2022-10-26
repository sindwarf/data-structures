var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.storage = {};
  // instance.size = queueMethods.size;
  // instance.dequeue = queueMethods.dequeue;
  // instance.enqueue = queueMethods.enqueue;
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

queueMethods.dequeue = function() {
  var retVal = this.storage[0];
  debugger;
  for (var key in this.storage) {
    if (key !== '0') {
      this.storage[key - 1] = this.storage[key];
    }
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return retVal;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


