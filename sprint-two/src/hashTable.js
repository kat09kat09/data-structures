//hi hello
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket= this._storage.get(i); 
  var overRidden= false; 
  if(!bucket) {
    bucket=[[k,v]];
  } else {
    bucket.forEach(function(tuple) {
      if(tuple[0]===k) {
        tuple[1]=v; 
        overRidden=true;
      } 
    });
    if(!overRidden) { bucket.push([k,v]) ;} 
  }
  
  this._storage.set(i,bucket); 
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  var bucketOfTuples= this._storage.get(i);
  
  for(var j=0; j<bucketOfTuples.length; j++) {
    var tuple= bucketOfTuples[j];
    if(tuple[0] ===k) {
      return tuple[1]; 
    }
  }
  return null; 
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket= this._storage.get(i); 

  if(bucket) {
    bucket.forEach(function(tuple, idx) {
      if(tuple[0]===k) {
        bucket.splice(idx,1);
      } 
    });
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
