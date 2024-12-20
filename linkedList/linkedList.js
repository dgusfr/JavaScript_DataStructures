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
