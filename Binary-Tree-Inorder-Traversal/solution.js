// 94. Binary Tree Inorder Traversal

// Problem statement:

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Understand the problem first:

// hme binary tree ka root diya hua hai, humein uske nodes ke values ka inorder traversal return karna hai. Inorder traversal ka matlab hai ki hum pehle left subtree ko visit karenge, phir root node ko, aur finally right subtree ko.

// Approach and Solution:

// Hum ek recursive function banaenge jo inorder traversal perform karega. Is function mein hum check karenge ki agar current node null hai toh hum return kar denge. Agar node null nahi hai, toh hum pehle left subtree ko visit karenge, phir current node ka value list mein add karenge, aur finally right subtree ko visit karenge.

var inorderTraversal = function(root) {
    function performInorderTraversal (root, list){
        if (root === null){
            return null;
        }
        performPostOrderTechnique(root.left, list);
        list.push(root.val)
        performPostOrderTechnique(root.right, list);
    };
    let list = [];
    performInorderTraversal(root, list);
    return list;
};