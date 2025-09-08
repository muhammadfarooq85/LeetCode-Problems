// c

// Problem statement

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Understnd the problem first

// hmare pas aik array of int nums hy jo ke ascending order my sort hy. hum ne isko height balanced tree me convert krna hy

// Solution

// hum isko recurrsion ke through solve kre ge jis me hum two pointers le ge aik start pe aur aik end pe rakhe ge aur then isko change bi krte rahe ge mid ke base pe sb se pehle mid nikal ke wo elem uta ke then aik node bnae ge then uska left uta ge mid then node bnae aur wo bi aik sub tree ka root bne ge then uska left aur then uska right aur aese hi chlte rahe ge mtlb ye ke recursively call kr le ge.

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
