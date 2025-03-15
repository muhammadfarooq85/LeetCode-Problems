// 876. Middle of the Linked List

// Problem statement

// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

// Understand the problem first

// hme aik singly linked list di gai hy hum ne uska middle find krna hy. agr do middle ho tu second middle return krna hy.

// Solution

// iske liye zaroori hy ke apko singly linked list ka concept ana chahie. jis me head, tail and node itself hoti hy aur node ke pas do values hoti hy aik next node ka address aur dosra itslef data. Is me two pointers use krte hoe hum middle node ko grab kr le ge.

// Note: Ye solution vs Code pe naho chle ga kyu ke hum ne linked list ka setup nahi kya. Isko leetcode pe run kre.

var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

console.log(middleNode([1, 2, 3, 4, 5])); // 3
