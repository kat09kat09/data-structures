var Stack = function(){
  var someInstance ={};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function(){
    var item = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return item; 
  };

  someInstance.size = function(){
    var count=0; 
    for(var key in storage) {
      count++; 
    }
    return count; 
  };

  return someInstance;
};

// delete object['property']