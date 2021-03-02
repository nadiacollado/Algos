// Stack from scratch, preferred if you need it for tons of data
// Big O: Insertion & Removal - O(1)

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size;
  }
  pop(){
    if (!this.first) return null;
    let poppedNode = this.first
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = poppedNode.next;
    }
    this.size--;
    return poppedNode.val;
  }
}