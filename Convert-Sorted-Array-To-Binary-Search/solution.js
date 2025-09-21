// 108. Convert Sorted Array to Binary Search Tree

// Problem statement

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Understand the probelem first

// hmare pas ail sorted array of nums hy jis me elements ascending order me sorted hy. hum ne is array ko binary search tree me convert krna hy.

// Solution

// is me hum recurrsion aur two pointers ka istemal kre ge aur then us se se pehle root then left and then right nodes ko build kre ge.

var sortedArrayToBST = function (nums) {
    let start = 0; // start
    let end = nums.length - 1; // end

    // helper
    function createBinaryTree(start, end) {
        if (start > end) {
            return null;
        };
        let mid = Math.floor(((start + end) / 2));
        let root = new TreeNode(nums[mid]);
        root.left = createBinaryTree(start, mid - 1);
        root.right = createBinaryTree(mid + 1, end);
        return root;
    };
    // calling helper function
    return createBinaryTree(start, end);
};