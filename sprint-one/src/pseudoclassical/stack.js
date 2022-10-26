var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

var instance = new Stack();

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.push = function(val) {
  var curKey = Object.keys(this.storage).length;
  while (curKey > 0) {
    this.storage[curKey] = this.storage[curKey - 1];
    curKey--;
  }
  this.storage[0] = val;
};

Stack.prototype.pop = function() {
  var poppedVal = this.storage[0];
  for (var key in this.storage) {
    if (key !== '0') {
      this.storage[key - 1] = this.storage[key];
    }
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return poppedVal;
};
