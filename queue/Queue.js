// wil be used the native methods of array
// to see an implementation of a stack, search the Stack.js class in stack folder

class Queue {
  #queue;

  constructor() {
    this.#queue = [];
  }


  enqueue(value) {
    this.#queue.push(value);
  }

  dequeue() {
    return this.#queue.shift()
  }

  front() {
    const length = this.#queue.length;
    if(length == 0) return null;

    return this.#queue[0];
  }

  isEmpty() {
    const length = this.#queue.length;
    if(length == 0) return true;

    return false;
  }

  size() {
    return this.#queue.length;
  }

  print() {
    return this.#queue;
  }
}


const queue = new Queue();
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(3223);
queue.enqueue(5);
queue.enqueue(99);
console.log(queue.print())
console.log(queue.front())
console.log(queue.dequeue())
console.log(queue.print())