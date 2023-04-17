class Stack {
  #stack;
  constructor(){
    this.#stack = [];
  }

  push(value) {
    const length = this.#stack?.length ?? 0;

    this.#stack[length] = value;
  }

  pop() {
    const length = this.#stack?.length;
    if (!length) return;

    this.#stack = this.#stack;

  }

  peek() {
    const length = this.#stack?.length;
    if (!length) return [];

    return this.#stack[length-1]
  }

  isEmpty() {
    const length = this.#stack?.length;
    if (!length) return true;

    return false
  }

  clear() {
    this.#stack = [];
  }

  size() {
    return this.#stack.length;
  }

  print() {
    return this.#stack;
  }

}

const stack = new Stack();
stack.push(9)
stack.push(1)
stack.push(2)
stack.push(0)
stack.push(1999)
console.log(stack.size())