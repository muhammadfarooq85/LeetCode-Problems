// 70. Climbing Stairs

// Problem statement:

// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Understand the problem first:

// hme aik nth value di gai hy jo ke total steps hy hum ya to aik time 1 step le skty hy ya 2 steps le skty hy hume total distinct ways find krni hy jese ke agar n=3 hy to hum 3 steps ko is trha le skty hy

// Approach and Solution:

// Is problem ko hum dynamic programming se solve kr skty hy kyun ke isme overlapping subproblems hy. Hum ye dekh skty hy ke agar hum last step pe 1 step lety hy to pehle wale steps k total ways kya hongy aur agar hum last step pe 2 steps lety hy to pehle wale steps k total ways kya hongy. Is tarha hum dono ko add kr den gy to hume total distinct ways mil jain gy.

function climbStairs(n) {
  if (n <= 1) return 1;

  let dp = new Array(n + 1);
  dp[0] = 1; // 1 way to stay at the ground (do nothing)
  dp[1] = 1; // 1 way to reach the first step

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(5)); // Output: 8
