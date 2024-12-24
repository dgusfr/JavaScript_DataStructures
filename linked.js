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

