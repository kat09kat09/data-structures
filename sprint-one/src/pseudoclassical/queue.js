var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //hello hi
  this.storage = {};
  this.currentSize=0; 
};

Queue.prototype = {
  enqueue: function (value) {
    this.storage[this.currentSize] = value; 
    this.currentSize++;
  }, 
  dequeue: function () {
    if(this.currentSize) {
      var item= this.storage[0];
      delete this.storage[0];
      
      //shift over other keys
      for (var key in this.storage) {
        this.storage[parseInt(key,10)-1] = this.storage[key];
      }
      
      this.currentSize--; 
      return item; 
    }
  },
  size: function () {
    return this.currentSize; 
  }, 
  constructor: Queue
}
