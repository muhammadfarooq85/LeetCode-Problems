// 226. Invert Binary Tree

// Problem statement:

// Given the root of a binary tree, invert the tree, and return its root.

// Understanding the Problem first:

// Inverting a binary tree means swapping the left and right children of all nodes in the tree.

// Solution And Approach:

// We can solve this problem using a recursive approach. For each node, we will swap its left and right children and then recursively call the function on the left and right subtrees.

function helper(node) {
  if (node === null) return null;

  // swap left and right
  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  // recursive calls
  helper(node.left);
  helper(node.right);
}
var invertTree = function (root) {
  if (root === null) return null;

  helper(root);
  return root;
};
