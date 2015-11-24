var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	var exist= this._storage.some(function(storedItem){
		return _.isEqual(storedItem, item)
	}); 

	if(!exist) {
		this._storage.push(item); 
	}

};

setPrototype.contains = function(item){
	//need to implement deep checking for objects/arrays/functions/ etc
	return this._storage.some(function(storedItem) {
		return _.isEqual(storedItem, item); 
	}); 
	
};

setPrototype.remove = function(item){
	var idx=  this._storage.reduce(function(targetIdx,storedItem ,idx) {
		if(_.isEqual(storedItem, item)) {
			targetIdx= idx; 
		} 
		return targetIdx; 
	}, -1); 

	if(idx>=0) {
		this._storage.splice(idx,1); 
	}
	
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: o(1)
 contains: o(n)
 remove: o(1)
 */