

// Instantiate a new graph
var Graph = function() {

  this.container = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //i: a primitive value for this node
  //o: none
  var nodeObject = {};
  nodeObject.value = node;
  nodeObject.edges = [];

  this.container.push(nodeObject);
  //
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //i: value
  //o: boolean

  //for each node in container
    //if input value = container[i]
      //return true
    //else
      //return false

  for (var i = 0; i < this.container.length; i++) {
    if (node === this.container[i].value) {
      return true;
    }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //i: value of node to be removed
  //o: none
  for (var i = 0; i < this.container.length; i++) {
    //if container i value = node
      //put it in index
    if (this.container[i].value === node) {
      this.container.splice(i, 1);
    }

  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //i: first node, second node
  //o: boolean

  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return false;
  }
  for (var i = 0; i < this.container.length; i++) {
    if (this.container[i].value === fromNode) {
      for (var j = 0; j < this.container[i].edges.length; j++) {
        if (this.container[i].edges[j] === toNode) {
          return true;
        }
      }
    }
    if (this.container[i].value === toNode) {
      for (var j = 0; j < this.container[i].edges.length; j++) {
        if (this.container[i].edges[j] === fromNode) {
          return true;
        }
      }
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //i: first node, second node
  //o: none
  //check if they both exist using contians
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.container.length; i++) {
      if (this.container[i].value === fromNode) {
        this.container[i].edges.push(toNode);
      }
      if (this.container[i].value === toNode) {
        this.container[i].edges.push(fromNode);
      }
    }
  }
  //modify both node arrays
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //i: first and second
  //o:
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.container.length; i++) {
      if (this.container[i].value === fromNode) {
        for (var j = 0; j < this.container[i].edges.length; j++) {
          if (this.container[i].edges[j] === toNode) {
            this.container[i].edges.splice(j, 1);
          }
        }
      }
      if (this.container[i].value === toNode) {
        for (var j = 0; j < this.container[i].edges.length; j++) {
          if (this.container[i].edges[j] === fromNode) {
            this.container[i].edges.splice(j, 1);
          }
        }
      }
    }
  }
  //update both node edges
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //i: a function
  //o: apply function to each node

  //for each node in container
    //call cb for each
  for (var i = 0; i < this.container.length; i++) {
    cb(this.container[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


