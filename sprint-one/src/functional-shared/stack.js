var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.storage = {};
  // instance.push = stackMethods.push;
  // instance.pop = stackMethods.pop;
  // instance.size = stackMethods.size;
  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var currentKey = Object.keys(this.storage).length;
  while (currentKey > 0) {
    this.storage[currentKey] = this.storage[currentKey - 1];
    currentKey--;
  }
  this.storage[0] = value;
};

stackMethods.pop = function() {
  var poppedVal = this.storage[0];
  for (var key in this.storage) {
    if (key !== '0') {
      this.storage[key - 1] = this.storage[key];
    }
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return poppedVal;
};

stackMethods.size = function () {
  return (Object.keys(this.storage).length);
};

