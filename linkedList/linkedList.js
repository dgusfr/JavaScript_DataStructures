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
