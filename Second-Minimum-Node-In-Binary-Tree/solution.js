// 671. Second Minimum Node In a Binary Tree

// Problem statement:

// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree. If no such second minimum value exists, output -1 instead.

// Understand the problem first:

// hme aik binary tree di hui hai jisme har node ke do ya zero child hote hain. Agar kisi node ke do child hain to uska value uske dono child ke value me se chota hota hai. Hume is tree me se second minimum value find karni hai. Agar second minimum value exist nahi karti to hume -1 return karna hai.

// Approach and Solution:

// hum sb se phel dfs in preorder traversal karenge aur har node ke value ko ek set me store karenge. the pir hum us set pe traverse karenge aur second minimum value find karenge. agar second minimum value exist nahi karti to hum -1 return karenge.

var findSecondMinimumValue = function (root) {
  let min = Infinity;
  let secondMin = Infinity;
  let set = new Set();

  let dfs = function (node) {
    if (node === null) return;
    set.add(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  // Find minimum and second minimum
  for (let value of set) {
    if (value < min) {
      secondMin = min; // old min becomes second min
      min = value; // update min
    } else if (value > min && value < secondMin) {
      secondMin = value; // update second min
    }
  }

  return secondMin === Infinity ? -1 : secondMin;
};
