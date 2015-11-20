var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var currentNode= Node(value); 
    if(list.head===null && list.tail===null) {
      list.head= currentNode; 
      list.tail= currentNode; 
    // } else if (list.tail===null) {
    //   list.tail= currentNode;
    } else {
      list.tail.next= currentNode; 
      list.tail = currentNode; 
    }
    console.log('list', list); 
  };

  list.removeHead = function(){
    var originalHead; 
    if(!list.head) {
      return; 
    } else if (list.head && !list.head.next){
      originalHead= list.head.value; 
      list.head= null; 
      list.tail= null; 
    } else {
      originalHead= list.head.value; 
      list.head= list.head.next;
      
      
    }
    return originalHead; 
  };

  list.contains = function(target){
    var found = false; 
    var currentNode= list.head; 
    while (!found && currentNode) {
      if(currentNode.value===target) {
        found= true; 
      }
      currentNode= currentNode.next; 
    }

    return found; 
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
