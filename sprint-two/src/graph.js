

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.instance= {}; 
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.instance[node] =[]; 
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return node in this.instance; 
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(targetNode){
  var ends; 
  var deleteIdx; 
  //get all of the partners that target node is associated with
  var partners= this.instance[targetNode]; 
  //iterate thorugh those partners and find them in our instance
  for(var i=0; i< partners.length; i++) {
    ends= this.instance[partners[i]]; 
    deleteIdx= ends.indexOf(targetNode);
    ends.splice(deleteIdx, 1); 
  }
    //look at the partners of that node & find target node, delete from array
    
  //delete target node 
  delete this.instance[targetNode]; 
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var partners= this.instance[fromNode]; 
  var found= false; 
  for(var i=0; i<partners.length; i++) {
    found= found || partners[i]===toNode; 
    if (found) {break; }
  }
  return found; 
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  partners= this.instance[fromNode]; 
  partners.push(toNode); 
  
  partners= this.instance[toNode];
  partners.push(fromNode); 
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
    var partners;
  var idx; 
  partners= this.instance[fromNode]; 
  idx=partners.indexOf(toNode);
  partners.splice(idx, 1); 
  
  partners= this.instance[toNode]; 
  idx=partners.indexOf(fromNode);
  partners.splice(idx, 1); 
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.instance) {
    cb(key); 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



