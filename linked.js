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
