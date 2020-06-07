class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
   this.first = null;
   this.last = null;
  }

  enqueue(item) {
    const node = new _Node(item);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last){
      this.last.next = node;
    }
  }

  dequeue() {
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = node.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value
  }

  show() {
    // Return the next item in the queue.
    if (this.first === null) return;
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    if (this.first === null) return;
    let builder = '';
    let current = this.first;
    builder += current.value;
    while (current.next !== null) {
      current = current.next;
      builder += ' -> ' + current.value;
    }
    builder += ' -> tail';
    console.log(builder);
    return;
  }
}

module.exports = Queue
