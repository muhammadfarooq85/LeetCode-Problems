// 145. Binary Tree Postorder Traversal

// Problem statement

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Understand the problem first

// no  need explain

// Solution

// simple recursion plus post-order technique ko use kr ke solve kre ge

var postorderTraversal = function(root) {
    function performPostOrderTechnique (root, list){
        if (root === null){
            return null;
        }
        performPostOrderTechnique(root.left, list);
        performPostOrderTechnique(root.right, list);
        list.push(root.val)
    };
    let list = [];
    performPostOrderTechnique(root, list);
    return list;
};