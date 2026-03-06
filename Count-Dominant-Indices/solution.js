// 3833. Count Dominant Indices

// Problem statement:

/*
You are given an integer array nums of length n.

An element at index i is called dominant if: nums[i] > average(nums[i + 1], nums[i + 2], ..., nums[n - 1])

Your task is to count the number of indices i that are dominant.

The average of a set of numbers is the value obtained by adding all the numbers together and dividing the sum by the total number of numbers.

Note: The rightmost element of any array is not dominant.
*/

// Understand the problem first:

// hme aik array di hui hai, aur hme usme se dominant indices count karne hai. Ek index dominant tab hota hai jab uska value uske baad ke elements ke average se zyada ho. Rightmost element kabhi bhi dominant nahi ho sakta.

// Approach and Solution:

// hum log simply itterate karenge array ke elements par, aur har element ke liye uske baad ke elements ka average calculate karenge. Agar current element us average se zyada hai, toh hum count ko increment karenge. Finally, hum count return karenge.

var dominantIndices = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let sum = 0;

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      count++;
    }

    if (nums[i] > sum / count) {
      result++;
    }
  }

  return result;
};

console.log(dominantIndices([1, 2, 2])); // Output: 2
