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
LinkedList.prototype.removeLast = function () {
  if (this.isEmpty()) return null;
  if (this.size === 1) {
      const removedValue = this.head.value;
      this.head = this.tail = null;
      this.size--;
      return removedValue;
  }
  let current = this.head;
  while (current.next !== this.tail) {
      current = current.next;
  }
  const removedValue = this.tail.value;
  this.tail = current;
  this.tail.next = null;
  this.size--;
  return removedValue;
};
LinkedList.prototype.find = function (value) {
  let current = this.head;
  while (current) {
      if (current.value === value) return current;
      current = current.next;
  }
  return null;
};
LinkedList.prototype.reverse = function () {
  let prev = null;
  let current = this.head;
  this.tail = this.head;
  while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  this.head = prev;
};
LinkedList.prototype.insertAt = function (index, value) {
  if (index < 0 || index > this.size) return false;
  if (index === 0) return this.addFirst(value);
  if (index === this.size) return this.addLast(value);
  const newNode = new Node(value);
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
      current = current.next;
  }
  newNode.next = current.next;
  current.next = newNode;
  this.size++;
};
LinkedList.prototype.removeAt = function (index) {
  if (index < 0 || index >= this.size) return null;
  if (index === 0) return this.removeFirst();
  if (index === this.size - 1) return this.removeLast();
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
      current = current.next;
  }
  const removedValue = current.next.value;
  current.next = current.next.next;
  this.size--;
  return removedValue;
};
LinkedList.prototype.getAt = function (index) {
  if (index < 0 || index >= this.size) return null;
  let current = this.head;
  for (let i = 0; i < index; i++) {
      current = current.next;
  }
  return current;
};
LinkedList.prototype.toArray = function () {
  const result = [];
  let current = this.head;
  while (current) {
      result.push(current.value);
      current = current.next;
  }
  return result;
};
LinkedList.prototype.fromArray = function (arr) {
  arr.forEach(value => this.addLast(value));
};
LinkedList.prototype.contains = function (value) {
  return this.find(value) !== null;
};
