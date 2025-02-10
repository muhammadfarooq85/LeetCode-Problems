// 232. Implement Queue using Stacks

// Problem statement

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.

// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

// Understand the problem first...

// hm ne qeue data structure ko stack data structure ke zariye se implemnt krna hy. aur us me pop, push, peek aur empty ka method lgane hy. push methos hmare qeue ki back per add kre ga. Jbke pop method front se remove kr ga aur return kre ga. Jbke peek front se element ko return kre ga. Jbke empoty method ye check kre ga ke wo qeue empty hy ya nahi.

// Solution

// JavaScript me hum qeue ke liye array use kre ge like in stack. ke hum do stacks bna ge aik push krne ke liye aur doosri pop krwane ke liye. Agr hum simply qeue data structure ko implement krte tu hme do arrays ki zaroorat na hoti. constructor me hum initialize kr le ge. iske bad methods define kre ge. push me simply ye hoag ke hum push wale stack me push kr de ge. Jbke pop ke method me hum pop wale stack ko use kre ge. ke agr pop wale stack khali hy tu us me stack ke element ko pop krwa ke push wale stack me dal do. aur back se pop kr do pop wale stack se. peek me hum isi logic ko le ke front wlae element ko nikal kr return kr de ge. empty ye chk kre ga ke agr wo empty hy tu true warna false return kr de ga.

class MyQueue {
  private stack1: number[]; // Used for enqueue operation (push)
  private stack2: number[]; // Used for dequeue operation (pop)

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // Push element to the back of the queue
  push(x: number): void {
    this.stack1.push(x);
  }

  // Removes the element from the front of the queue and returns it
  pop(): number {
    if (this.stack2.length === 0) {
      // Move elements from stack1 to stack2 to reverse their order
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    return this.stack2.pop()!;
  }

  // Get the front element
  peek(): number {
    if (this.stack2.length === 0) {
      // Move elements from stack1 to stack2 to reverse their order
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  // Returns whether the queue is empty
  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}


const myQueue = new MyQueue(); // creating instance
myQueue.push(1); // Queue: [1]
myQueue.push(2); // Queue: [1, 2]
console.log(myQueue.peek()); // Output: 1
console.log(myQueue.pop());  // Output: 1, Queue: [2]
console.log(myQueue.empty()); // Output: false
myQueue.pop();  // Queue: []
console.log(myQueue.empty()); // Output: true
