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
