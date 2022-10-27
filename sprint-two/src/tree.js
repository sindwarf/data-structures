var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];//array containing number of subtrees


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //i: a primitive value
  //o:
      //create children object
      //add children value
      //add children children
    //push onto newTree.children

  var child = Object.create(treeMethods);
  child.value = value;
  child.children = [];
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //i: a primitive value
  //o: return boolean

//start at root
  //create boolean = false
//recursive funciton
  //if value === target
//boolean is true
  //if child array is empty
    //return
  //for each child
    //call recursive function

  //return boolean
  var isContained = false;
  var inner = function(node) {
    if (node.value === target) {
      isContained = true;
    }
    if (node.children.length === 0) {
      return;
    }

    for (var i = 0; i < node.children.length; i ++) {
      inner(node.children[i]);
    }
  };

  inner(this);

  return isContained;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
