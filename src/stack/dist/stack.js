"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this._size = 0;
    }
    add(item) {
        const newNode = new Node(item);
        newNode.next = this.top;
        this.top = newNode;
        this._size++;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedItem = this.top?.data;
        if (this.top?.next)
            this.top = this.top.next;
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
exports.Stack = Stack;
const stack = new Stack();
stack.add('first');
stack.add('last');
console.log(stack.peek(), stack.size(), stack.pop());
//# sourceMappingURL=stack.js.map