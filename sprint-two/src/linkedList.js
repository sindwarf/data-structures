var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //i: any numeric value
  //create new node with new value
      //node.next will stay null
  //if head doesn't exist
      //point head to new node
  //if tail exists
      //modify the existing tail
          //node.next of tail will point to new node

    var newNode = Node(value);
    if (list.head === null) { //if linked list is empty
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //o: return removed node value
    //if head exists
    //if next node does not exist
        //store first node
        //set head and tail to null
        //
    //else
    //next node becomes head
    //store first node
    //set thisnode.nextnode
    //return node
    var returnNode = list.head;
    if (!list.head.next) {
      list.tail = null;
      list.head = null;
    } else {
      list.head = returnNode.next;
    }
    return returnNode.value;
  };

  list.contains = function(target) {
    //i: target node
    //o: boolean
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
