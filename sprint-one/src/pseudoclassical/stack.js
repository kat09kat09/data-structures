var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //hi hello
  this.storage = {};
  this.currentSize = 0;
};

Stack.prototype = {
  push : function(value) {
    this.storage[this.currentSize] = value;
    this.currentSize ++;
  },
  pop : function() {
    if (this.currentSize) {
      var item = this.storage[this.currentSize - 1];
      delete this.storage[this.currentSize - 1];
      this.currentSize --;
      return item;
    }
  },
  size : function() {
    return this.currentSize;
  },
  constructor: Stack
 };


