// 39. Combination Sum

// Problem statement:

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different. The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Understand the problem first:

// hme aik array of distinct integers aur aik target integer diya gaya hai. Humein un sab combinations ko return karna hai jinka sum target ke barabar ho. Har number ko hum multiple times use kar sakte hain.

// Approach and Solution:

// Hum backtracking approach use karenge jisme hum recursively combinations banayenge aur check karenge ki unka sum target ke barabar hai ya nahi. Agar hai to us combination ko result mein add kar denge.

var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(start, remaining, path) {
    // Base case
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    if (remaining < 0) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);

      backtrack(i, remaining - candidates[i], path);

      path.pop();
    }
  }

  backtrack(0, target, []);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // Output: [[7], [2,2,3]]
