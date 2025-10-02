// 897. Increasing Order Search Tree

// Problem statement

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

// Understand the problem first

// hme binary tree ka root dia gia hy hum ne is binary tree se aesa tree bnana hy jis me in-order traversal follow ho aur binary tree ka left most node root bn jaye new tree me aur ye bi ke new tree me left child nahi ho ga just right childs ho ge.

// Solution

// hum log in order traversal lga ge aur pehle left, root and then right uta ke dummy node ke age attach krte jaye ge

var increasingBST = function (root) {
    let dummy = new TreeNode(-1);
    let curr = dummy;
    function inorder(node) {
        if (node === null) {
            return;
        }
        inorder(node.left);
        node.left = null;     // left null kar diya
        curr.right = node;    // list me attach kiya
        curr = node;          // curr ko update kiya
        inorder(node.right);
    };
    inorder(root);
    return dummy.right;
};