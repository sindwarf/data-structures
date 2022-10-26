var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    var returnVal = storage[0];
    for (var key in storage) {
      //debugger;
      if (key !== '0') {
        storage[key - 1] = storage[key];
      }
    }
    delete storage[Object.keys(storage).length - 1];
    return returnVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
