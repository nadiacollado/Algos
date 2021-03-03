class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  insert(val){
    let newNode = new Node(val);
    if (this.root === null){
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while(current){
      if (val === current.val) return undefined;
        if (val < current.val){
          if (current.left === null){
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.val){
          if (current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
    }
  }
}