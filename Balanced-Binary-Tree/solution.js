// 110. Balanced Binary Tree

// Problem statement:

// Given a binary tree, determine if it is height-balanced.

// Understanding the problem:

// hme aik binary tree dia gaya hai, hme check karna hai ki wo height-balanced hai ya nahi.

// Approach and Solution:

// hum left aur right subtree ki height nikalenge recursively, aur check karenge ki dono ki height ka difference 1 se zyada to nahi hai. Agar zyada hua to tree balanced nahi hai.

var isBalanced = function isBalanced(root) {
  function height(node) {
    if (!node) return 0;

    const left = height(node.left);
    if (left === -1) return -1;

    const right = height(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
  }

  return height(root) !== -1;
};
