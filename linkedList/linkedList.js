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
LinkedList.prototype.getMiddle = function () {
  if (this.isEmpty()) return null;
  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
};
LinkedList.prototype.detectCycle = function () {
  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
  }
  return false;
};
LinkedList.prototype.sort = function () {
  const arr = this.toArray();
  arr.sort((a, b) => a - b);
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.fromArray(arr);
};
LinkedList.prototype.mergeSorted = function (list) {
  const dummy = new Node(0);
  let current = dummy;
  let a = this.head;
  let b = list.head;
  while (a && b) {
      if (a.value < b.value) {
          current.next = a;
          a = a.next;
      } else {
          current.next = b;
          b = b.next;
      }
      current = current.next;
  }
  current.next = a || b;
  this.head = dummy.next;
};
LinkedList.prototype.removeDuplicates = function () {
  const seen = new Set();
  let current = this.head;
  let prev = null;
  while (current) {
      if (seen.has(current.value)) {
          prev.next = current.next;
          this.size--;
      } else {
          seen.add(current.value);
          prev = current;
      }
      current = current.next;
  }
};
LinkedList.prototype.appendList = function (list) {
  if (this.isEmpty()) {
      this.head = list.head;
      this.tail = list.tail;
  } else if (!list.isEmpty()) {
      this.tail.next = list.head;
      this.tail = list.tail;
  }
  this.size += list.size;
};
LinkedList.prototype.clone = function () {
  const clonedList = new LinkedList();
  let current = this.head;
  while (current) {
      clonedList.addLast(current.value);
      current = current.next;
  }
  return clonedList;
};
LinkedList.prototype.getNthFromEnd = function (n) {
  if (n <= 0 || n > this.size) return null;
  let slow = this.head;
  let fast = this.head;
  for (let i = 0; i < n; i++) {
      fast = fast.next;
  }
  while (fast) {
      slow = slow.next;
      fast = fast.next;
  }
  return slow;
};
LinkedList.prototype.splitList = function () {
  const middle = this.getMiddle();
  if (!middle) return [null, null];

  const secondList = new LinkedList();
  secondList.head = middle.next;
  secondList.tail = this.tail;

  middle.next = null;
  this.tail = middle;

  let current = secondList.head;
  while (current) {
      secondList.size++;
      current = current.next;
  }

  return [this, secondList];
};
LinkedList.prototype.deleteByValue = function (value) {
  if (this.isEmpty()) return null;

  if (this.head.value === value) {
      return this.removeFirst();
  }

  let current = this.head;
  while (current.next && current.next.value !== value) {
      current = current.next;
  }

  if (current.next) {
      const removedValue = current.next.value;
      current.next = current.next.next;
      if (!current.next) this.tail = current;
      this.size--;
      return removedValue;
  }

  return null;
};
LinkedList.prototype.rotate = function (k) {
  if (this.isEmpty() || k <= 0 || k >= this.size) return;

  let current = this.head;
  let count = 1;
  while (count < k && current) {
      current = current.next;
      count++;
  }

  const newHead = current.next;
  current.next = null;
  this.tail.next = this.head;
  this.head = newHead;
};
LinkedList.prototype.removeAll = function (value) {
  while (this.head && this.head.value === value) {
      this.removeFirst();
  }

  let current = this.head;
  while (current && current.next) {
      if (current.next.value === value) {
          current.next = current.next.next;
          this.size--;
      } else {
          current = current.next;
      }
  }

  if (this.tail && this.tail.value === value) {
      this.tail = current;
  }
};
