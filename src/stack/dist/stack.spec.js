"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./stack");
const funcs_1 = require("./funcs");
describe('My stack', () => {
    let stack;
    const userArray = [];
    const newUser = {
        id: 1,
        name: 'Ejiroghene',
        occupation: 'Software Engineer',
        age: 29,
        dob: '15.05.1994',
    };
    const secondUser = {
        id: 1,
        name: 'Nero',
        occupation: 'Cyber security specialist',
        age: 29,
        dob: '16.06.1994',
    };
    beforeAll(() => {
        stack = new stack_1.Stack();
    });
    it('is created empty', () => {
        expect(stack.top).toBe(null);
        expect(stack._size).toEqual(0);
    });
    it('can add to stack(top)', () => {
        stack.add(1);
        expect(stack.peek()).toBe(1);
    });
    it('can pop item from stack)', () => {
        stack.pop();
        expect(stack._size).toBe(0);
    });
    it('can clear and reset stack', () => {
        stack.clear();
        expect(stack.top).toBe(null);
        expect(stack._size).toEqual(0);
    });
    it('can peek the next item on the stack', () => {
        stack.add(1);
        stack.add(2);
        stack.add(3);
        expect(stack.peek()).toBe(3);
    });
    it('should return null if no peek', () => {
        stack.clear();
        expect(stack.peek()).toBe(null);
    });
    it('should create a new user, push to the users array and return the user', () => {
        const newlyCreatedUser = (0, funcs_1.createUser)(newUser, userArray);
        (0, funcs_1.createUser)(secondUser, userArray);
        expect(newlyCreatedUser).toEqual(newUser);
    });
    it('should remove user with specified userId from the array', () => {
        (0, funcs_1.deleteUser)(1, userArray);
        expect(userArray).toEqual([secondUser]);
    });
});
//# sourceMappingURL=stack.spec.js.map