// 283. Move Zeroes

// Problem Statement

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.

// Understnad the problem first

// hmare pas aik int of array nums hy hum ne us array me jitne bi zero hy unko usi arrays ke end per dalna hy without using an extra space

// Solution

// is me like two pointers ko use kr ke in place hum non-zero numbers ko start me aur zeros ko end me dal de ge.

var moveZeroes = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [ 1,3,12,0,0 ]
