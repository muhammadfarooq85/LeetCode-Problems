// 540. Single Element in a Sorted Array

// Problem statement

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Return the single element that appears only once. Your solution must run in O(log n) time and O(1) space.

// Understand the problem first

// Hmare pas aik array of int nums hy jo ke sorted hy. Hum ne single elemnet in sorted array dondna hy. Km z km aik integre ho ga jo ke unique ho ga.

// Solution

// pehle to ye dekh le ge ke agr wo first hy ya last tu un ko return kr de ge. Agr wo na first na last then hum log binary search ka use kr ke answer find kr le ge.

let singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums[0] !== nums[1]) {
    return nums[0];
  } else if (nums[nums.length - 1] !== nums[nums.length - 2]) {
    return nums[nums.length - 1];
  } else {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
        return nums[mid];
      } else if (mid % 2 !== 0) {
        if (nums[mid] === nums[mid - 1]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      } else {
        if (nums[mid] === nums[mid + 1]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    return -1;
  }
};

console.log(singleNonDuplicate([10, 10, 20, 20, 42, 50, 50])); // 42
console.log(singleNonDuplicate([10, 10, 20, 20, 50, 50])); // -1
