declare class Node<T> {
    next: Node<T> | null;
    data: T;
    constructor(data: T);
}
export declare class Stack<T> {
    top: Node<T> | null;
    _size: number;
    constructor();
    add(item: T): void;
    pop(): T | null | undefined;
    peek(): T | null | undefined;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
}
export {};
