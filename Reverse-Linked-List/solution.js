// 206. Reverse Linked List

// Problem Statement

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Understand the problem first

// Solution

// simply hum ne us linked list ko revrese kr dena hy.

var reverseList = function (head) {
  let prev = null; // prev will store the previous node
  let current = head; // current is the node we're currently processing
  let next = null; // next is used to temporarily store the next node

  // means we will end our loop when we reaches the end of linked list
  while (current !== null) {
    next = current.next; // Store the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move prev one step forward
    current = next; // Move current one step forward
  }

  // At the end of the loop, prev will be the new head of the reversed list
  return prev;
};

console.log(reverseList([1, 2, 3, 4, 5, 6])); // [6, 5, 4, 3, 2, 1]
