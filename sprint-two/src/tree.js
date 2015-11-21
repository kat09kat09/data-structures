//hello hi
var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains= treeMethods.contains; 
  
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var subTree= Tree(value); 
  this.children.push(subTree); 
};


treeMethods.contains = function(target){
  var found= false; 
  if(this.value===target) {
    return true; 
  } else {
    for(var i = 0; i<this.children.length; i++) {
      found= found|| this.children[i].contains(target);   
    }
  }
  return found; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: o(1)
 contains: o(n) 
 */

