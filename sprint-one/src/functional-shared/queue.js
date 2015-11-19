var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //someinstance is 
  var someInstance= {
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size,
    storage: {}
  }; 

  return someInstance; 
};

var queueMethods= {
  enqueue: function(value) {   
    var currLoc= this.size(); 
    this.storage[currLoc]= value; 

  },
  dequeue: function () {
    //remove the item at key 0
    var item = this.storage[0];
    delete this.storage[0]; 
    var end= this.size();

    // shift every key that's left over by 1
    for (var key in this.storage) {
      this.storage[parseInt(key,10)-1] = this.storage[key];   
    }
    
    //delete the extra last key
    delete this.storage[end]; 

    //return the removed value
    return item; 


  },
  size: function() {
    var count=0; 
    for(var key in this.storage) {
      count++; 
    }
    return count; 
  }
};

 