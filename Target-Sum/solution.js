// 494. Target Sum

// Problem statement:

// You are given an integer array nums and an integer target. You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// Understand the problem first:

// hme aik int of array dia hua hy aur aik target dia hua hy, hme array k har element k sath + ya - lagana hy aur unko concatenate krna hy, aur hme dekhna hy k kya wo target k barabar hota hy ya nhi

// Approach and Solution:

// hum log isko recursion se solve kr skte hy, hum log har element k sath + ya - lagayenge aur dekhna hy k kya wo target k barabar hota hy ya nhi, agar hota hy to hum log count ko increment kr denge

var findTargetSumWays = function (nums, target) {
  const memo = new Map();

  function solve(i, remaining) {
    if (i === nums.length) {
      // ternory operator
      return remaining === 0 ? 1 : 0;
    }

    const key = i + "," + remaining;

    if (memo.has(key)) {
      return memo.get(key);
    }

    // Choose +
    const add = solve(i + 1, remaining + nums[i]);

    // Choose -
    const subtract = solve(i + 1, remaining - nums[i]);

    const result = add + subtract;
    memo.set(key, result);

    return result;
  }

  return solve(0, target);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // Output: 5
