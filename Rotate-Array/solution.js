// 189. Rotate Array

// Problem statement

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Understand the problem first...

// hme aik array of int nums dia gia hy jis ko hum ne rotat krna hy.

// Solution

// simple ye ke hum while ka loop lg ke aur slicing ko use kr ke isko hal kr le ge.


let rotate = function (nums, k) {
  let result = [];
  let coK = k;
  let lenOfNums = nums.length;
  while (coK > 0) {
    result.unshift(nums[lenOfNums - 1]);
    coK--;
    lenOfNums--;
  }
  return [...result, ...nums.slice(0, nums.length - k)];
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [ 5, 6, 7, 1, 2, 3, 4 ]