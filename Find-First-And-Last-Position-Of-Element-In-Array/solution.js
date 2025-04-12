// 34. Find First And Last Position Of Element Array

// Problem statement

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.

// Understand the problem first

// hmare pas aik array of int hy aur sorted me aur aik target hy hum ne us target ka first aur last poition occurrence find krni hy. agr mil jaye tu index return krna hy otherwise [-1, -1] return krna hy.

// Solution

// binary search ka use kr ke hum log is ko solve kr le ge.

var searchRange = function (nums, target) {
  let result = [-1, -1];
  if (nums.length === 0) {
    return result;
  }
  result[0] = firstOccurrence(nums, target);
  result[1] = lastOccurrence(nums, target);

  function firstOccurrence() {
    let ans = -1;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        ans = mid;
        end = mid - 1;
      } else if (target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return ans;
  }

  function lastOccurrence() {
    let ans = -1;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        ans = mid;
        start = mid + 1;
      } else if (target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return ans;
  }

  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 9], 8)); // [ 3, 4 ] index
