import { NotImplementedError } from '../extensions/index.js';

import { ListNode } from '../extensions/list-node.js';

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
export default class Queue {
  constructor() {
    this.head = null;  // front of the queue
    this.tail = null;  // back of the queue
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (!this.head) {
      // If queue is empty, new node becomes both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add to the end (tail) of the queue
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return undefined; // or throw an error, depending on requirements
    }
    
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    
    // If we just removed the last element, update tail to null
    if (!this.head) {
      this.tail = null;
    }
    
    return dequeuedValue;
  }
}