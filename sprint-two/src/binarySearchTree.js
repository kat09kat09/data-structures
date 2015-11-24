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
    
  },
  breadthFirstLog: function (results, level ){
    level= level || [this]; 
    results= results || []; 
    var newLevel= []; 

    if(!level.length) {
      //no more items in the current level, you're done 
      return results; 
    }

    level.forEach(function (node) {
      if(node || node===0) {
        results.push(node.value);
      }

      if(node.left) {
        newLevel.push(node.left); 
      } 
      if(node.right) {
        newLevel.push(node.right); 
      }

    }); 

    return this.breadthFirstLog(results, newLevel); 

  }
  
}
 
 /*Complexity: What is the time complexity of the above functions?
 insert: o(n)   / avg: o(log(n))
 contains: o(n)  /  avg: o(log(n))
 depthfirstlog: o(n)  / avg: o(log(n))
*/