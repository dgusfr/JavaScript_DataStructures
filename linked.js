LinkedList.prototype.hasCycle = function () {
  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
  }
  return false;
};
LinkedList.prototype.removeCycle = function () {
  if (!this.hasCycle()) return;

  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) break;
  }

  slow = this.head;
  while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
  }

  fast.next = null;
};
LinkedList.prototype.toString = function () {
  let result = '';
  let current = this.head;
  while (current) {
      result += `${current.value}${current.next ? ' -> ' : ''}`;
      current = current.next;
  }
  return result;
};
LinkedList.prototype.removeAllNodes = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};
LinkedList.prototype.reverseInGroups = function (k) {
  if (k <= 1 || this.isEmpty()) return;

  let current = this.head;
  let prev = null;

  while (current) {
      let lastNodeOfPrevPart = prev;
      let lastNodeOfSubList = current;
      let next = null;
      let i = 0;

      while (current && i < k) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
          i++;
      }

      if (!lastNodeOfPrevPart) {
          this.head = prev;
      } else {
          lastNodeOfPrevPart.next = prev;
      }

      lastNodeOfSubList.next = current;
      prev = lastNodeOfSubList;
  }
};
LinkedList.prototype.containsDuplicate = function () {
  const seen = new Set();
  let current = this.head;
  while (current) {
      if (seen.has(current.value)) return true;
      seen.add(current.value);
      current = current.next;
  }
  return false;
};LinkedList.prototype.lengthOfCycle = function () {
  if (!this.hasCycle()) return 0;

  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) break;
  }

  let count = 0;
  do {
      slow = slow.next;
      count++;
  } while (slow !== fast);

  return count;
};
LinkedList.prototype.swapNodes = function (x, y) {
  if (x === y) return;

  let prevX = null;
  let currX = this.head;
  while (currX && currX.value !== x) {
      prevX = currX;
      currX = currX.next;
  }

  let prevY = null;
  let currY = this.head;
  while (currY && currY.value !== y) {
      prevY = currY;
      currY = currY.next;
  }

  if (!currX || !currY) return;

  if (prevX) {
      prevX.next = currY;
  } else {
      this.head = currY;
  }

  if (prevY) {
      prevY.next = currX;
  } else {
      this.head = currX;
  }

  const temp = currX.next;
  currX.next = currY.next;
  currY.next = temp;
};
LinkedList.prototype.rotateRight = function (k) {
  if (!this.head || k <= 0) return;

  let length = this.size;
  k = k % length;

  if (k === 0) return;

  let fast = this.head;
  let slow = this.head;

  for (let i = 0; i < k; i++) {
      fast = fast.next;
  }

  while (fast.next) {
      slow = slow.next;
      fast = fast.next;
  }

  fast.next = this.head;
  this.head = slow.next;
  slow.next = null;
};
LinkedList.prototype.isSorted = function () {
  let current = this.head;
  while (current && current.next) {
      if (current.value > current.next.value) return false;
      current = current.next;
  }
  return true;
};
LinkedList.prototype.removeGreaterThan = function (value) {
  while (this.head && this.head.value > value) {
      this.removeFirst();
  }

  let current = this.head;
  while (current && current.next) {
      if (current.next.value > value) {
          current.next = current.next.next;
          this.size--;
      } else {
          current = current.next;
      }
  }

  if (this.tail && this.tail.value > value) {
      this.tail = current;
  }
};

LinkedList.prototype.partition = function (x) {
  const smallerList = new LinkedList();
  const greaterList = new LinkedList();

  let current = this.head;

  while (current) {
      if (current.value < x) {
          smallerList.addLast(current.value);
      } else {
          greaterList.addLast(current.value);
      }
      current = current.next;
  }

  if (smallerList.tail) {
      smallerList.tail.next = greaterList.head;
  }

  this.head = smallerList.head || greaterList.head;
  this.tail = greaterList.tail || smallerList.tail;
  this.size = smallerList.size + greaterList.size;
};
LinkedList.prototype.deleteMiddle = function () {
  if (this.size <= 1) {
      this.removeFirst();
      return;
  }

  let slow = this.head;
  let fast = this.head;
  let prev = null;

  while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
  }

  prev.next = slow.next;
  this.size--;
};
LinkedList.prototype.removeGreaterThan = function (value) {
  while (this.head && this.head.value > value) {
      this.removeFirst();
  }

  let current = this.head;
  while (current && current.next) {
      if (current.next.value > value) {
          current.next = current.next.next;
          this.size--;
      } else {
          current = current.next;
      }
  }

  if (this.tail && this.tail.value > value) {
      this.tail = current;
  }
};
