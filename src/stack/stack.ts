class Node<T> {
  next: Node<T> | null;
  data: T;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class Stack<T> {
  top: Node<T> | null;
  _size: number;

  constructor() {
    this.top = null;
    this._size = 0;
  }

  add(item: T) {
    const newNode = new Node<T>(item);
    newNode.next = this.top;
    this.top = newNode;
    this._size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const poppedItem = this.top?.data;
    if (this.top?.next) this.top = this.top.next;
    this._size--;

    return poppedItem;
  }

  peek() {
    return this.isEmpty() ? null : this.top?.data;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this._size;
  }

  clear() {
    this._size = 0;
    this.top = null;
  }
}

const stack = new Stack<string>();

stack.add('first');
stack.add('last');
console.log(stack.peek(), stack.size(), stack.pop());
