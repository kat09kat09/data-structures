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
    } else {
      if(this.left && this.right) {
        if(this.right.value===value || this.left.value===value){
          return true; 
        } else {
          return [this.left, this.right].some(function(child) {
            return child.contains(value); 
          }); 
        }
        
      } else if (!this.left && this.right) {
        if(this.right.value===value)  {
          return true; 
        } else {
          return this.right.contains(value); 
        }
      } else if(this.left && !this.right){
        if(this.left.value===value){
          return true; 
        } else {
          return this.left.contains(value); 
        }
      } else {
        return false; 
      }
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
