//hi hello
var BinarySearchTree = function(value){
  var newTree= Object.create(BSTMethods);
  newTree.value= value; 
  newTree.left= null;
  newTree.right= null; 
  
  return newTree;
};


var BSTMethods=  {
  insert: function (value) {
    if(value < this.value) {
      if(!this.left) {
        this.left= BinarySearchTree(value); 
        return; 
      } else {
        return this.left.insert(value); 
      }
     
    } else if(value > this.value) {
       if(!this.right) {
        this.right= BinarySearchTree(value); 
        return; 
      } else {
        return this.right.insert(value); 
      }
    } else {
      return; 
    }
  },
  contains: function (value) {
    
     if(this.value===value) {
      return true; 
     } else if(value< this.value  && this.left) {
          return this.left.contains(value); 
     } else if( value >this.value && this.right){
        return this.right.contains(value); 
     }
     return false; 

  },
  depthFirstLog: function (cb) {
      cb(this.value)
      
      if(this.left && this.right) {
          [this.left, this.right].forEach(function(child) {
            child.depthFirstLog(cb); 
          }); 
        
      } else if (!this.left && this.right) {

         this.right.depthFirstLog(cb); 
      } else if(this.left && !this.right){

         this.left.depthFirstLog(cb); 
      } 
    
  }
  
}
 
/*
 * Complexity: What is the time complexity of the above functions?
 */
