// 2239. Find Closest Number to Zero

// Problem statement

// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Understand the problem first

// hme aik array of int nums dia gia hy jiska size n hy means hme koi pta nahi ke isme kitne numbers hy hum ne wo number return krna hy jo 0 ke closest hy agr multiple answers ho tu largest return krna hy

// Solution

// is me hum loop lga ke JavaScript ka inbuilt method use kr ke chk kr le ge ke konsa number closest hy

let findClosestNumber = function (nums) {
  let closestNum = nums[0];
  for (num of nums) {
    if (
      Math.abs(num) < Math.abs(closestNum) ||
      (Math.abs(num) === Math.abs(closestNum) && num > closestNum)
    ) {
      closestNum = num;
    }
  }
  return closestNum;
};

console.log(findClosestNumber([-4, -2, 1, 4, 8])); // 1
