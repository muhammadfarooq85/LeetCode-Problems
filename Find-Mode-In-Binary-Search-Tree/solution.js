// 501. Find Mode in Binary Search Tree

// Problem statement:

// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it. If the tree has more than one mode, return them in any order. Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// Understand the problem first:

// hme aik binary search tree di gayi hai jisme duplicate values ho sakti hain. Humein us tree mein sabse zyada baar aane wali value(s) ko return karna hai. Agar multiple values same frequency pe hain, toh un sabko return karna hai.

// Approach and plan:

// hm hashmap aur DFS ka use karenge. Pehle hm tree ko traverse karenge aur har value ki frequency ko hashmap mein store karenge. Saath hi, maximum frequency ko bhi track karenge. Jab traversal complete ho jaye, toh hashmap mein se un values ko collect karenge jinki frequency maximum frequency ke barabar hai.

var findMode = function (root) {
    let hashMap = {};
    let maxFreq = 0;

    // 1. Build frequency map with DFS
    let dfs = function (node) {
        if (node === null) return;

        hashMap[node.val] = (hashMap[node.val] || 0) + 1;
        maxFreq = Math.max(maxFreq, hashMap[node.val]);

        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    // 2. Find all values with frequency = maxFreq
    let result = [];
    for (let [value, frequency] of Object.entries(hashMap)) {
        if (frequency === maxFreq) {
            result.push(parseInt(value));
        }
    }

    return result;
};