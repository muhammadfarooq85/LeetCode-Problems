// 42. Find Target Indices After Sorting Array

// Problem Statament

// You are given a 0-indexed integer array nums and a target element target. A target index is an index i such that nums[i] == target. Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

// Understand the problem first

// hmare pas aik array of int nums hy aur aik target int target hy. Hamein ye dekhna hy k nums array ko sort krne k baad target ki index kya kya ho sakti hy. Agar koi index nahi milta to hamein empty array return krna hy. Aur jo bhi index milta hy wo increasing order mein hona chahiye.

// Solution

// simply ye kre ge ke pehle targetNum ko count kr le ge aur then non targetNum ko count kr le ge. phir ye pta chla le ge ke kitne nontarget hy aut ktne target hy.

var targetIndices = function (nums, target) {
    let targetNumCount = 0;
    let nonTargetNumCount = 0;
    for (let num of nums) {
        if (target === num) {
            targetNumCount++;
        } else if (num < target) {
            nonTargetNumCount++;
        };
    };

    let ans = [];
    while (targetNumCount > 0) {
        ans.push(nonTargetNumCount);
        nonTargetNumCount++;
        targetNumCount--;
    };
    return ans;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1, 2]
console.log(targetIndices([2, 2, 4, 3], 4)); // [ 3 ]
