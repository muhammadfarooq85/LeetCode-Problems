// 617. Merge Two Binary Trees

// Problem statement:

// Given two binary trees, imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Understand the problem first:

// hme do binary trees diye gaye hain, hume unko merge karna hai. Jab hum unko merge karenge, toh agar dono trees ke nodes overlap karte hain, toh unke values ko sum karna hai. Agar koi node null nahi hai, toh usko new tree mein use karna hai.

// Approach and Solution:

// hum isko dfs ke zariye se solve kr ge jis me hum dono trees ke nodes ko compare karenge. Agar dono nodes null hain, toh hum null return karenge. Agar ek node null hai, toh hum dusre node ko return karenge. Agar dono nodes non-null hain, toh hum unke values ko sum karenge aur new node create karenge. Phir hum recursively left aur right subtrees ke liye bhi same process repeat karenge.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    // If both nodes are null, return null
    if (root1 === null && root2 === null) return null;

    // If one of the nodes is null, return the other
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    // Merge values of both nodes
    const merged = new TreeNode(root1.val + root2.val);

    // Recursively merge left and right subtrees
    merged.left = mergeTrees(root1.left, root2.left);
    merged.right = mergeTrees(root1.right, root2.right);

    return merged;
};
