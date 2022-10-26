class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(val) {
    this.storage[Object.keys(this.storage).length] = val;
  }

  dequeue() {
    var retVal = this.storage[0];
    for (var key in this.storage) {
      if (key !== '0') {
        this.storage[key - 1] = this.storage[key];
      }
    }
    delete this.storage[Object.keys(this.storage).length - 1];
    return retVal;
  }
}

var instance = new Queue();


