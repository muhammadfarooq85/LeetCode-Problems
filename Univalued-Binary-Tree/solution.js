// 965. Univalued Binary Tree

// Problem statement

// A binary tree is uni-valued if every node in the tree has the same value. Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

// Understand the problem first

// hmare pas aik binary tree hy hum ne ye dekhna ke wo uni-valued hy ya nahi uno ne ye bi btaea hy ke uni-valued wo tree hy jis ki tmam nodes ki value aik jesi ho

// Solution

// hum log simply is me recursion ka concept use kre ge sb se pehle ye dekhe ge agr tu wo tree hi null hy tu true return kre ge then hum root ki val ko pakde ge then uske left aur then uske right aur isi trah uska left aur right check kre ge agr left and right age same hoa tu true warna false

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let isUnivaluedTree = (root) => {
  if (!root) return true;

  let compare = (node, val) => {
    if (node == null) return true;

    if (node.val !== val) return false;

    let leftSideOfTree = compare(node.left, val);
    let rightSideOfTree = compare(node.right, val);
    return leftSideOfTree && rightSideOfTree;
  };

  return compare(root, root.val);
};

let tree1 = new TreeNode(2, new TreeNode(2), new TreeNode(2));
let tree2 = new TreeNode(5, new TreeNode(5), new TreeNode(6));
console.log(isUnivaluedTree(tree1)); // true
console.log(isUnivaluedTree(tree2)); // false
