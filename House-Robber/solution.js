// 198. House Robber

// Problem statement:

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Understand the problem first:

// hme aik array diya hai jisme har element ek house ke amount ko represent karta hai. Hume maximum amount nikalna hai jo hum rob kar sakte hain bina adjacent houses ko rob kiye.

// Approach and Solution:

// Hum is problem ko solve karne ke liye dynamic programming ka use karenge. Hum ek array banayenge jisme har index par maximum amount store hoga jo hum uss index tak rob kar sakte hain.

// bottom up approach:
// var rob = function (nums) {
//     let memo = new Array(nums.length + 1).fill(-1);

//     memo[0] = 0;
//     memo[1] = nums[0];

//     for (let i = 2; i <= nums.length; i++) {
//         let steal = nums[i - 1] + memo[i - 2];
//         let skip = memo[i - 1];

//         memo[i] = Math.max(skip, steal);
//     }

//     return memo[nums.length];
// };

// recursion and memoization approach:

function rob(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(-1);

  function solve(i) {
    if (i >= n) return 0;

    if (dp[i] !== -1) return dp[i];

    const robCurrent = nums[i] + solve(i + 2);
    const skipCurrent = solve(i + 1);

    dp[i] = Math.max(robCurrent, skipCurrent);
    return dp[i];
  }

  return solve(0);
}
