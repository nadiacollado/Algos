// BIG O
// Insertion O(1), Removal O(1), Searching O(N), Access O(N)

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift(){
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val){
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      // automatically set to null
      // newNode.prev = null;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter, current;
    let midpoint = this.length/2;
    if (idx <= midpoint) {
      counter = 0;
      current = this.head;
      while (idx !== counter) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (idx !== counter) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  set(idx, val){
    let oldNode = this.get(idx);
    if (oldNode !== null) {
      oldNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val){
    // use our get
    if (idx < 0 || idx >= this.length) return null;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(idx){
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let removedNode = this.get(idx)
    let afterNode = removedNode.next;
    let beforeNode = removedNode.prev;

    beforeNode.next = afterNode, afterNode.prev = beforeNode;
    removedNode.prev = null, removedNode.next = null;
    this.length--;
    return removedNode;
  }
}