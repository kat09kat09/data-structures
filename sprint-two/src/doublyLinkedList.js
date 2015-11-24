var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead= function (value) {
    var newNode= Node(value); 

    var prevHead= list.head; 
    //if list is empty, point head & tail to new value
    if(!list.head) {
      list.head= newNode;
      list.tail= newNode; 
    } else if(list.head=== list.tail){
      //if list has 1 item, point tail to 2nd item
      list.tail= prevHead; 
      list.head= newNode; 
      list.head.next= list.tail;
      list.tail.previous= list.head;
    } else {
      //add the item
      list.head= newNode; 
      list.head.next= prevHead; 
      prevHead.previous= list.head; 
    }
   
  };

  list.removeTail= function (){
    var removedNode= list.tail; 

    //if list is empty, nothing to return
    if(!list.head) {
      return; 
    } else if(list.head === list.tail) {
      //if list has one item, remove it, head & tail point to null
      list.head= null;
      list.tail= null; 
    } else {
      //tail now points to removed node's previous
      list.tail= removedNode.previous; 
      //new tail's next now points to null
      list.tail.next= null; 
    }

    return removedNode.value;      
  }

  list.addToTail = function(value){
    var currentNode= Node(value); 

    if(!list.head && !list.tail) {
      //empty list-- head & tail points to the added node
      list.head= currentNode; 
      list.tail= currentNode; 
    } else {
      currentNode.previous= list.tail; 
      list.tail.next= currentNode; 
      list.tail = currentNode; 
    }
    
  };

  list.removeHead = function(){
    var originalHead; 
    var prev; 
    if(!list.head) {
      //list is empty, can't remove anything
      return; 
    } else if (list.head && !list.head.next){
      //there's only one item in the list, remove it, and you have an empty list
      originalHead= list.head.value; 
      list.head= null; 
      list.tail= null; 
      list.previous= null; 
    } else {
      originalHead= list.head.value; 
      prev= list.head.previous; 
      list.head= list.head.next;
      list.head.previous= prev; 
    }
    return originalHead; 
  };

  list.contains = function(target){
    var found = false; 
    var currentNode= list.head; 
    //keep iterating if you haven't found target & there's still a node to look at
    while (!found && currentNode) {
      if(currentNode.value===target) {
        //found it, you're done
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
  node.previous= null; 

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Add: o(1)  /avg: o(1)
 Remove: o(1)  /avg: o(1)
 Contains: o(n)  /  /avg: o(n)
 */



