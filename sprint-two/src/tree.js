
var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent= null; 
  newTree.addChild = treeMethods.addChild;
  newTree.contains= treeMethods.contains; 
  newTree.removeFromParent= treeMethods.removeFromParent; 
  
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var subTree= Tree(value); 
  subTree.parent= this; 
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

treeMethods.removeFromParent= function (target) {
  var children;
  var idx; 
  var result; 
  //returns the disassociated tree
  if(this.value=== target) {
    //find the target value in the parent's children & disassocate it
    var children= this.parent.children;
    var idx= children.reduce(function(targetIdx, child, idx) {
      if(child.value===target) {
        targetIdx= idx; 
      } else {
        targetIdx= targetIdx; 
      }
      return targetIdx; 
    }); 

    children.splice(idx,1); 

    //disassociate the current subtree from it's parent 
    this.parent= null; 

    return this; 
  } else {
    //keep recursing
    for(var i= 0; i< this.children.length; i++) {
      result= this.children[i].removeFromParent(target); 

      //if you've found the target on this child's subtree, you're done
      if(result) { return result; }
    }; 
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: o(1)
 contains: o(n) 
 */

