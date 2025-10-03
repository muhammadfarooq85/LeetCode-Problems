// 700. Search in a Binary Search Tree

// Problem statement

// You are given the root of a binary search tree (BST) and an integer val. Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Understand the problem first

// hme binary search tree ka root dia gia hy aur aik integer val. humne us node ko find krna hy jis node ke value val int ke brabar ho aur us ke sath rooted subtree return krna hy

// Solution

// Jesa ke hum jante hy ke binary tree me left pe km aur right pe badi values hot hy hum isi cheeze ka faida utate hoe us trf chle jaye ge aur then find kr ke return kr de ge 

var searchBST = function (root, val) {
  if (root === null || root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  }
  if (val > root.val) {
    return searchBST(root.right, val);
  }
};
