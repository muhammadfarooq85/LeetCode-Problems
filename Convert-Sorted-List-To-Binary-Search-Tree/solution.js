// 109. Convert Sorted List to Binary Search Tree

// Problem statement:

// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced

// Understanding the Problem:

// A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differs by more than one.
// The linked list is sorted in ascending order, which means we can use the middle element as the root of the BST to ensure it is height-balanced.

// Solution and Approach:

// 1. Find the middle element of the linked list to use as the root of the BST.
// 2. Recursively do the same for the left half and right half of the list to create left and right subtrees.
// 3. Use a helper function to find the middle of the linked list using the slow and fast pointer technique.

let findMid = function (head) {
    let prev = null;
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    };
    prev.next = null;
    return slow;
};

var sortedListToBST = function (head) {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        let root = new TreeNode(head.val);
        return root;
    };
    let mid = findMid(head);
    let root = new TreeNode(mid.val); // making the mid as root
    root.left = sortedListToBST(head); // giving the left side
    root.right = sortedListToBST(mid.next); // giving the right side
    return root;
};