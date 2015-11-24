
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0; 
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket= this._storage.get(i); 
  var overRidden= false; 
  var pctUsed; 
  

  if(!bucket) {
    //there's nothing in the current bucket, simply add tuple
    bucket=[[k,v]];
    this._count++; 
  } else {
    //there's something in the current bucket
    //check if the key already exists in the bucket, if it does override it
    bucket.forEach(function(tuple) {
      if(tuple[0]===k) {
        tuple[1]=v; 
        overRidden=true;
      } 
    });
    //if the key doesn't already exist in the bucket, add it
    if(!overRidden) { 
      bucket.push([k,v]);
      this._count++; 
    } 
  }
  
  this._storage.set(i,bucket); 

  pctUsed= this._count/ this._limit; 

  console.log('pctUsed', pctUsed); 
  
  //resize if hash table is 75 % full
  if(pctUsed > .75) {
    this.resize('double'); 
  }
  
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  var bucketOfTuples= this._storage.get(i);

  //if there's nothing in that bucket, then k doesn't exist in hash
  if(!bucketOfTuples){ return null}
  
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
  var pctUsed;

  if(bucket) {
    bucket.forEach(function(tuple, idx) {
      if(tuple[0]===k) {
        bucket.splice(idx,1);
        this._count--; 
      } 
    },this);
  }

  //resize if hash table is 25 % full 
  pctUsed= this._count/this._limit; 

  if(pctUsed < .25) {
    this.resize('half'); 
  }
};

HashTable.prototype.resize= function (type) {

  if(type=== 'double') {
    this._limit= this._limit*2; 
  } else if (type=== 'half'){
    this._limit= Math.floor(this._limit/2); 

  }

  //apply the resizing
  var oldStorage= this._storage; 
  this._storage= LimitedArray(this._limit); 
  this._count=0; 

  var context= this;   

  //iterate through old storage, get each key/value pair and store it again
  oldStorage.each(function (bucket) {
    if(!bucket) { 
      return; 
    }
    //iterate through bucket to grab each tuple
    for(var i=0; i< bucket.length; i++) {
      context.insert(bucket[i][0], bucket[i][1]); 
    }
  }, context); 

}



/*
 * Complexity: What is the time complexity of the above functions?
 insert: o(n) / avg: o(1)
 retrieve: o(n) /avg: o(1)
 remove: o(n) /avg: o(1)
 */
