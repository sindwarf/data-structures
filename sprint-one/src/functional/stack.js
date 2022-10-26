var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //i: a string
    //o: side effect of storing that data
    //c: don't use new, , or prototype chains

    //create length of object variable
    //for each property in object
      //starting at the last key
      //move each value to key + 1
    //assign new value to key at 0
    var currentKey = Object.keys(storage).length;
    while (currentKey > 0) {
      storage[currentKey] = storage[currentKey - 1];
      currentKey--;
    }
    storage[0] = value;
  };

  someInstance.pop = function() {
    //for each property in object
      //starting at key 1
      //move each value to key - 1
    var poppedItem = storage[0];

    for (var key in storage) {
      //debugger;
      if (key !== '0') {
        storage[key - 1] = storage[key];
      }
    }
    delete storage[Object.keys(storage).length - 1];
    return poppedItem;
  };

  someInstance.size = function() {
    return (Object.keys(storage).length);
  };

  return someInstance;
};
