var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

//var instance = new Queue();

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(val) {
  this.storage[Object.keys(this.storage).length] = val;
};

Queue.prototype.dequeue = function() {
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