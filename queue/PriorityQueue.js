class PriorityQueue {
  #queue;

  constructor() {
    this.#queue = [];
  }

  enqueue(value, priority) {
    // V1 IMPLEMENTATION
    // const toAdd = { value, priority };

    // if(this.isEmpty()) {
    //   this.#queue.push(toAdd);
    // }    

    // let lastIndex = 0;

    // while(true) {
    //   if(lastIndex >= this.size()){
    //     this.#queue.push(toAdd);
    //     break;
    //   } 
    //   if(this.#queue[lastIndex].priority < priority) {
    //     this.#queue.splice(lastIndex, 0, toAdd);
    //     break;
    //   }
    //   if(this.#queue[lastIndex].priority == priority) {
    //     this.#queue.splice(lastIndex, 0, toAdd);
    //     break;
    //   }
    //   lastIndex++;
    // }

    // V2 IMPLEMENTATION
    const toAdd = {
      priority,
      items: [
        value,
      ]
    };

    if(this.isEmpty()) {
      this.#queue.push(toAdd);
      return;
    }

    let lastIndex = 0;
    while(lastIndex < this.size()) {  
      const actualObject = this.#queue[lastIndex];
      if(actualObject.priority == priority) {
        this.#queue[lastIndex].items.push(value)
        break;
      }
      if (actualObject.priority < priority) {
        this.#queue.splice(lastIndex, 0, toAdd);
        break;
      }
      if(this.#queue[lastIndex].priority > priority) {
        this.#queue.push(toAdd);
        break;
      }
      lastIndex++;
    }
  }

  dequeue() {
    // V1
    // if(this.isEmpty()) return;
    // this.#queue.shift();

    // V2
    if(this.isEmpty()) return;

    if(!this.haveItemsOnTop()) {
      this.#queue.shift();
      return;
    }
    this.#queue[0].items.shift();
    if(!this.haveItemsOnTop()) {
      this.#queue.shift();
    }
  }

  haveItemsOnTop() {
    if(this.#queue[0].items.length) return true;
    return false;
  }

  front() {
    if(this.isEmpty()) return null;

    //V1
    // return this.#queue[0];

    //V2
    const priority = this.#queue[0].priority;
    const item = this.#queue[0].items[0];
    return {
      priority,
      value: item
    };
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

const queue = new PriorityQueue()
queue.enqueue('test 1', 90);
queue.enqueue('test 2', 6);
queue.enqueue('test 3', 90);
queue.enqueue('test 4', 3);
console.log(queue.print())
queue.dequeue()
console.log(queue.print())
queue.dequeue()
console.log(queue.print())
queue.enqueue('test 5', 9000);
console.log(queue.print())
console.log('FRONT: ', queue.front())