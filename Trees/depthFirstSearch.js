
// DFS
// Visit every branch completely before moving on

// PreOrder: process root, then process left to right -- could be useful if you want clone a tree
// PostOrder: process left, right, then root
// InOrder: process all left, then process all right -- data will ultimately be sorted! 

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
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(current){
      if (val === current.val) return undefined;
        if (val < current.val){
          if(current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.val) {
          if (current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
    }
  }
  find(val){
    if (!this.root) return false;
    let current = this.root;
    while(current){
      if (current.val === val) return true;
      if (val < current.val){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  DFSPreOrder(){
    let visited = [];

    function traverse(node){
      visited.push(node.val)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited
  }
  DFSPostOrder(){
    let visited = [];

    function traverse(node){
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }
  DFSInOrder(){
    let visited = [];

    function traverse(node){
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}