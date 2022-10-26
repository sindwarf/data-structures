class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  push(val) {
    var curKey = Object.keys(this.storage).length;
    while (curKey > 0) {
      this.storage[curKey] = this.storage[curKey - 1];
      curKey--;
    }
    this.storage[0] = val;
  }

  pop() {
    var poppedVal = this.storage[0];
    for (var key in this.storage) {
      if (key !== '0') {
        this.storage[key - 1] = this.storage[key];
      }
    }
    delete this.storage[Object.keys(this.storage).length - 1];
    return poppedVal;
  }

}

var instance = new Stack();