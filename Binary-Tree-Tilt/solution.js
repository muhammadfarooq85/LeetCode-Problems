// 563. Binary Tree Tilt

// Problem statement:

// Given the root of a binary tree, return the tilt of the whole tree. The tilt of a tree node is the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null nodes are considered to have tilt 0. The tilt of the whole tree is defined as the sum of all nodes' tilt.

// Understand the problem first:

// Hme aik binary tree di hui hai, aur hme uska tilt nikalna hai. Tilt ka matlab hai ki har node ke left subtree aur right subtree ke values ka difference. Aur hme poore tree ka tilt nikalna hai, jo ki har node ke tilt ka sum hoga.

// Approach and Solution:

// hum is me DFS (Depth First Search) ka use karenge. Hum har node ke liye left aur right subtree ke sum nikalenge, aur phir unka difference nikal kar us node ka tilt nikalenge. Phir hum is tilt ko global variable me add karenge, taaki hme poore tree ka tilt mil jaye.

var findTilt = function (root) {
  let sum = 0;

  let dfs = function (node) {
    if (node === null) return 0;

    // left traverse
    let lSum = dfs(node.left);

    // right traverse
    let rSum = dfs(node.right);

    // doing processing
    sum += Math.abs(lSum - rSum);
    return lSum + rSum + node.val;
  };

  dfs(root);
  return sum;
};
