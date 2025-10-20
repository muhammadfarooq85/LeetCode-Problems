// 24. Swap nodes in pairs

// Problme statement

// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Understand the problem first

// hme aik linked list di gai hai, jismein humein har do adjacent nodes ko swap karna hai. Humein sirf nodes ko hi swap karna hai, unke values ko nahi badalna.

// Solution and Approach

// 1. Create a dummy node that points to the head of the list. This helps in handling edge cases easily.
// 2. Use a pointer (curr) to traverse the list, starting from the dummy node.
// 3. While there are at least two nodes ahead of curr, perform the following steps:
//    a. Identify the two nodes to be swapped (swap1 and swap2).
//    b. Adjust the next pointers to swap the nodes.
//    c. Move the curr pointer two nodes ahead to continue swapping.
// 4. Return the new head of the list, which is dummy.next.

var swapPairs = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let curr = dummy;

  while (curr.next !== null && curr.next.next !== null) {
    let swap1 = curr.next;
    let swap2 = curr.next.next;

    swap1.next = swap2.next;
    swap2.next = swap1;

    curr.next = swap2;
    curr = swap1;
  }
  return dummy.next;
};
