// 1800. Maximum Ascending Subarray Sum

// Problem Statement

// Given an array of positive integers nums, return the maximum possible sum of an strictly increasing subarray in nums. A subarray is defined as a contiguous sequence of numbers in an array.

// Understand the problem statement

// hme aik array of int nums dia gia hy hum ne ascening subarray ka maximum return krna hy. subarray apke array ka part hota hy. 

// Solution

// simple hum track kre ge aur sum bi krte jay ge ke kaha tk hume asecnding order me values a rahi hy agr nahi a rahi tu simply un ka max kr ke return kr de ge lekin agr kahi beech me hmara ascending order stop ho gia tu hum ne jaha tk peechla sum kia tha usko previous me store kr ke age se subarray ko track kr ge aur then comapre kre ge kis subarray ka max ziada hy.

let maxAscendingSum = function (nums) {
  let currentMaxSum = nums[0];
  let previousMaxSum = nums[0];

  // We are finding for maximum ascending sum of sub-array
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      currentMaxSum += nums[i];
    } else {
      // creating a new sub-array...
      previousMaxSum = Math.max(previousMaxSum, currentMaxSum);
      currentMaxSum = nums[i];
    }
  }
  return Math.max(currentMaxSum, previousMaxSum);
};

console.log(maxAscendingSum([1, 2, 5, 4, 8, 9])); // 21
