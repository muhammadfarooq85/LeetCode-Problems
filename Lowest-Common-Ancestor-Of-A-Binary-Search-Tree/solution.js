// 235. Lowest Common Ancestor of a Binary Search Tree

// Problem statement:
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."

// Understand the problem first:
// In a binary search tree, for any given node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater than the node's value. This property can be utilized to find the LCA efficiently.

// Solutions & Approach:
// 1. Start from the root of the BST.
// 2. Compare the values of the current node with p and q.
// 3. If both p and q are less than the current node, move to the left child.
// 4. If both p and q are greater than the current node, move to the right child.
// 5. If one of p or q is on one side and the other is on the opposite side (or one of them is equal to the current node), then the current node is the LCA.

var lowestCommonAncestor = function (root, p, q) {
    if (root == null) return null;
    
    let temp = root;
    while (temp != null) {
        if (temp.val > p.val && temp.val > q.val) {
            temp = temp.left;
        } else if (temp.val < p.val && temp.val < q.val) {
            temp = temp.right;
        } else {
            return temp;
        }
    }
    return null;
};
