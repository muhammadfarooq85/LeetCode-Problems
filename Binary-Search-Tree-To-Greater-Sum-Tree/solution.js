// 1038. Binary Search Tree to Greater Sum Tree

// Problem statement

// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

// Understand the problem first

// dekhe simple si problem hy ke hme binary search tree ka root dia gia hy hum ne usko greater binary tree me convert krna hy is trah ke us tree me original key aur us se jitni bi badi keys hy unka sum up kr ke us key pe dal dena hy.

// Solution

// simply is per in order traversal kre ge aur us me hum thoda modification kr ke pehle right then root then left uta ge aur keys ko change krte jaye ge

var bstToGst = function (root) {
    let sum = 0;
    function helper(node) {
        if (node === null) {
            return;
        };

        helper(node.right);
        sum += node.val;
        node.val = sum;
        helper(node.left);
    }
    helper(root);
    return root;
};
