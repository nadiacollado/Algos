// BFS

// Visit every level horizontally

// Steps - Iteratively
// Create a q (can be an arr) and a var to store the values of nodes visited
// Place the root note in the q
// Loop as long as there is anything in the q
  // dq a node from the q and push the value of the node into the var that stores the nodes
  // if there is a left property on the note dq'd -- add it to the q
  // if there is a right property on the note dq'd -- add it to the q
// return the var that stores the values





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
  BFS(){
    let queue = [];
    let visited = [];
    let node = this.root;
    queue.push(node);

    while (queue.length){
      node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
}