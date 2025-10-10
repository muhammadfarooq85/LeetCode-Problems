// 1382. Balance a Binary Search Tree

// Problem statement 

// Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them. A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

// Understand the problem statement

// hme binary tree ka root dia gia hy hum ne is binary tree ko balaned binary search tree me convert krna hy aur ye ke balance binary search tree aesa tree hota hy jis me hr node ki left aur right depth zero aur one hota hy is se ziada nahi.

// Solution

// simply in order traversal kre ge then hmare pas aik sorted list me in order traversal se jo values utae ge hum usko add krte jaye ge then us list se ail balanced binary search tree bnae ge.

var performInOrderTraversal = function (node, list) {
    if (node == null) {
        return;
    }
    performInOrderTraversal(node.left, list);
    list.push(node.val);
    performInOrderTraversal(node.right, list);
};

var buildBinarySearchTree = function (list, start, end) {
    if (start > end) {
        return null;
    }
    
    let mid = Math.floor(start + (end - start) / 2);
    let root = new TreeNode(list[mid]);
    root.left = buildBinarySearchTree(list, start, mid - 1);
    root.right = buildBinarySearchTree(list, mid + 1, end);

    return root;
};

var balanceBST = function (root) {
    let list = [];
    performInOrderTraversal(root, list);
    let start = 0;
    let end = list.length - 1;
    return buildBinarySearchTree(list, start, end);
};