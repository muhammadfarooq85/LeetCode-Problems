// 257. Binary Tree Paths

// Problem statement:

// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Understanding the Problem:

// hme aik binary tree di root node ditti jandi hai, te sanu sare root-to-leaf paths return karne ne.

// Approach and Solution:

// hm depth first search (DFS) use karange to explore all paths from the root to the leaves.
// As we traverse the tree, we will keep track of the current path.
// When we reach a leaf node, we will add the current path to our result list.

var binaryTreePaths = function (root) {
  let result = [];

  function dfs(node, path) {
    if (!node) return;

    path.push(node.val);

    // if leaf node
    if (!node.left && !node.right) {
      result.push(path.join("->"));
    } else {
      dfs(node.left, path);
      dfs(node.right, path);
    }

    path.pop(); // backtrack
  }

  dfs(root, []);
  return result;
};