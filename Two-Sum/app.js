// Problem Statement:-

// Given an array of integers `nums` and an integer `target`, return `indices` of the `two numbers` such that they `add up to target`.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Understand the Problem first...

// hme do aese element array me find krne hy jin ko sum kre tu target mtlb (9) aye. Aur hme un numbers ka index return krna hy. Hum ne same element ko dobara use nahi krna. Aur hum ne indexes return krne hy un do numbers ke order matter nahi krta.

// Solution:-
// Sb se pehle hum ne hr do do pairs ko chk krna hy aur un ko sum kr ke ye chk krwana hy ke wo target ke equal hy ya nahi. Agr ho ge tu hum wahi per un numbers ka index return kr de ge jin ka sum target ke equal hy.
// Is ke liye hum do loop lgae ge pehla loop hr pair me se pehli value utae ga aur agla loop pair ka akhri number utae ga. Chle code se solve krte hy.

// let's assume for example 1:- However our code must pass all the testcases for all provided examples.

const nums = [2, 7, 11, 15];
const target = 9;

function findTwoSum(n, t) {
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === t) {
        return [i, j];
      }
    }
  }
}

console.log(findTwoSum(nums, target));
