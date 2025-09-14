// 155. Min Stack

// Problem statement

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Understand the probelem first

// just hum ne minimum stack ke concept ko implement krna hy. Jis me kuch methods hy jin ki simple shubdu me explanation likhi hoi hy

// Solution

// Stack ata ho just. Lekin aik tricky part ye ke ke hum log kese minimum value uta ge tu hum us ke liye aik aur stack bnae ge jo ke hmari is problem ko solve kre ga otherwise hum aik operation ko nahi kr ske ge.

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  // this logic for the minStack tracking min element
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const removed = this.stack.pop();
  if (removed === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

// Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(val);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
