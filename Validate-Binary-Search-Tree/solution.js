// 98. Validate BInary Search Tree

// Problem statement:
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Understanding the problem:
// We need to traverse the binary tree and ensure that for each node, all values in the left subtree are less than the node's value and all values in the right subtree are greater than the node's value. This condition must hold true for every node in the tree.

// Approach:
// We will do in order traversal first then create a list of values and check if the list is sorted in ascending order. Then check if the list is sorted in ascending order. If it is sorted then the tree is a valid BST otherwise it is not.

let performInOrderTraversal = function (node, list) {
    if (node === null) {
        return;
    }
    performInOrderTraversal(node.right, list);
    performInOrderTraversal(node.left, list);
    list.push(node.val);
};
var isValidBST = function (root) {
    let list = [];
    performInOrderTraversal(root, list);
    for (let i = 1; i < list.length; i++) {
        if (list[i] <= list[i - 1]) {
            return false;
        }
    }
    return true;
};