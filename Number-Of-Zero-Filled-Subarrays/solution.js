// 2348. Number of Zero-Filled Subarrays

// Problem statement:

// Given an integer array nums, return the number of subarrays filled with 0.

// Understand the problem first:

// hme aik int array dia gia hu ne ye dekhna hy k kitny subarrays hy jisme sirf 0 hi 0 ho

// Approach and Solution:

// hum isko simple loop se bi kr skte hy aur math ke concept se bi kr skte hy. Pehla solution math based hy doosra loop based hy.

// var zeroFilledSubarray = function (nums) {
//     let n = nums.length;
//     let result = 0;
//     let i = 0;

//     while (i < n) {
//         let l = 0;
//         if (nums[i] === 0) {
//             while (i < n && nums[i] === 0) {
//                 i++;
//                 l++;
//             }
//         } else {
//             i++;
//         }
//         result += Math.floor((l) * (l + 1) / 2);
//     }
//     return result;
// };

var zeroFilledSubarray = function (nums) {
  let n = nums.length;
  let result = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      count = 0;
    }

    result += count;
  }

  return result;
};

console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0])); // 9   
