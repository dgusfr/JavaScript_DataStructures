class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}
class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }
}
LinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};
LinkedList.prototype.addFirst = function (value) {
  const newNode = new Node(value);
  if (this.isEmpty()) {
      this.head = this.tail = newNode;
  } else {
      newNode.next = this.head;
      this.head = newNode;
  }
  this.size++;
};
LinkedList.prototype.addLast = function (value) {
  const newNode = new Node(value);
  if (this.isEmpty()) {
      this.head = this.tail = newNode;
  } else {
      this.tail.next = newNode;
      this.tail = newNode;
  }
  this.size++;
};
LinkedList.prototype.printList = function () {
  let current = this.head;
  while (current) {
      console.log(current.value);
      current = current.next;
  }
};
LinkedList.prototype.removeFirst = function () {
  if (this.isEmpty()) return null;
  const removedValue = this.head.value;
  this.head = this.head.next;
  this.size--;
  if (this.isEmpty()) this.tail = null;
  return removedValue;
};
