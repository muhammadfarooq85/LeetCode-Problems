// 704. Binary Search

// Problem Statement

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Understand the problem first...

// hme aik array of int ( ascending order me hy ) nums ki dai gai hy aur aik target int dia gia hy hum ne us target ko nums me find kr ke suka index return krna hy. agr nahi milta tu -1 return krna hy.

// Solution

// hum is me two pointers technique use krte hoe isko solve kre ge.

var search = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  while (rightPointer >= leftPointer) {
    let midOfNums = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[midOfNums] === target) {
      return midOfNums;
    } else if (nums[midOfNums] < target) {
      leftPointer = midOfNums + 1;
    } else if (nums[midOfNums] > target) {
      rightPointer = midOfNums - 1;
    }
  }
  return -1; // return -1 if target not found
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
