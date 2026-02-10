// 654. Maximum Binary Tree

// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:
/*
Create a root node whose value is the maximum value in nums.
Recursively build the left subtree on the subarray prefix to the left of the maximum value.
Recursively build the right subtree on the subarray suffix to the right of the maximum value.
Return the maximum binary tree built from nums.
*/

// Understand the problem first:

// hme aik array diya hoga jisme unique values hongi, hme us array se ek binary tree banana hoga jisme root node us array ka maximum value hoga, left subtree us array ke left side ke elements se banega aur right subtree us array ke right side ke elements se banega. Ye process recursively chalega jab tak humare paas array ke elements khatam nahi ho jate.

// Approach and Solution:

// sb se pehle hme array me se maximum value find karni hogi, uske baad us maximum value ko root node bana denge, phir uske left side ke elements se left subtree banayenge aur right side ke elements se right subtree banayenge. Ye process recursively chalega jab tak humare paas array ke elements khatam nahi ho jate.

var constructMaximumBinaryTree = function (nums) {
    // Helper function to build tree from subarray
    function build(left, right) {
        // Base case: no elements
        if (left > right) return null;

        // Find index of maximum value in current range
        let maxIndex = left;
        for (let i = left + 1; i <= right; i++) {
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }

        // Create root node with max value
        const root = new TreeNode(nums[maxIndex]);

        // Recursively build left and right subtrees
        root.left = build(left, maxIndex - 1);
        root.right = build(maxIndex + 1, right);

        return root;
    }

    return build(0, nums.length - 1);
};
