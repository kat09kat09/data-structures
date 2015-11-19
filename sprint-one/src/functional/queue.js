var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var currentCount=0; 

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[currentCount] = value;
    currentCount++;
  };

  someInstance.dequeue = function(){
    if(currentCount!==0) {
      //remove the item at key 0
      var item= storage[0]; 
      delete storage[0]; 
      // shift everyone else down by 1
      for(var key in storage) {
        storage[parseInt(key,10)-1] = storage[key]; 
      }
      //delete the key with the highest # (currentCount)
      delete storage[currentCount]; 

      //decrementing count
      currentCount--; 

      //return item we removed
      return item;

    }
    
  };

  someInstance.size = function(){
    return currentCount; 
  };

  return someInstance;
};
