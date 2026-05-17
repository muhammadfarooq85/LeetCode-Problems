// 129. Sum Root to Leaf Numbers

/*
You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
*/

// Understand me the problem first:

// hme aik binary tree dia gia hy hum ne root se leaf node tk ke difference number combinations nikalne hy aur unko add kr ke return krna hy.

// Approach and Solution:

// hum log yaha dfs aur math ka concept use kre ge. Math ka concept ye hy ke kisi do digits ko ap number kese bnao ge us ke liye curr = curr * 10 + digit ka formula use kr ge. Sorry, i can't explain at this moment because of time shortage.

var sumNumbers = function (root) {
  let solve = function (node, curr) {
    if (node == null) return 0;
    curr = curr * 10 + node.val;

    // stopping at leaf node and forming a one path:
    if (node.left == null && node.right == null) {
      return curr;
    }

    let l = solve(node.left, curr);
    let r = solve(node.right, curr);
    // returning the left plus right
    return l + r;
  };

  return solve(root, 0);
};