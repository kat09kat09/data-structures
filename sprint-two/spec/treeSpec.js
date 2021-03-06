describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(1);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have a method named "removeFromParent"', function (){
    expect(tree.removeFromParent).to.be.a("function"); 
  }); 

  it('should have nodes with a parent property', function() {
    tree.addChild(5);
    tree.addChild(6);
    expect(tree.children[0].parent.value).to.equal(1); 
    expect(tree.parent).to.equal(null); 

  }); 

  it('should return the disassociated tree when calling "removeFromParent" ', function (){
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(4); 
    expect(tree.removeFromParent(6).value).to.equal(6);
    expect(tree.children[0].value).to.equal(5);  
    expect(tree.children[1].value).to.equal(4);  
  }); 

  it('should contain a "traverse" method ', function (){
    expect(tree.traverse).to.be.a('function'); 
  });

  it('should execute "traverse" by calling a callback on each value in the tree', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(4);

    var doubled= [];  
    tree.traverse(function (value) {
      doubled.push(value*2); 
    });

    expect(doubled[0]).to.equal(2);
    expect(doubled[1]).to.equal(10);
    expect(doubled[2]).to.equal(12);
    expect(doubled[3]).to.equal(8);
  }); 

});
