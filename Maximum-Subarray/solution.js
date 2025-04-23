// 53. Maximum Subarray

// Problem statement

// Given an integer array nums, find the subarray with the largest sum, and return its sum.


// Understand the problem statement

//  hmare pas aik array of int nums hy hum ne wo subarray maloom krna hy jis ka sum sab se zyada ho ga. subarray ka matlab hy k hum array ka koi bhi part le sakty hain jo k continuous ho ga. 

// Solution

// is ko hum dynamic programming se solve kr sakty hain. hum aik variable currentSum rakhain gy jis main hum current subarray ka sum rakhein gy. phir aik aur variable maxSum rakhain gy jis main hum maximum subarray ka sum rakhein gy. phir hum array ko loop krain gy aur har element ko currentSum main add krain gy. agar currentSum ka value agle subarray se zyada ho jata hy to hum currentSum me add kre ge. Agar aesa nahi hota tu simplt hum aik new subarray shuru karain gy. phir hum maxSum ko currentSum se compare karain gy aur jo zyada ho usay maxSum main rakhein gy. phir last main hum maxSum ko return karain gy.

var maxSubArray = function (nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (currentSum + nums[i] > nums[i]) {
            // adding to existing subarray if next subarray sum is not greater than current subarray
            currentSum += nums[i];
        } else {
            // starting new sub array
            currentSum = nums[i];
        }
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5])); // 6
