// 78. Subsets

// Problem Statement:

// Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.

// Understand the problem first:

// hme aik array di gayi hy hum ne uske tamam possible subsets nikalne hy including empty set and the set itself.

// Approach and Solution:

// hum log bactracking approach use karengy jisme hum har element ko include ya exclude karengy aur recursively subsets banayengy.

var subsets = function (nums) {
  let ans = [];

  let backtrack = function (resultSets, tempSet, nums, start) {
    resultSets.push([...tempSet]);

    for (let i = start; i < nums.length; i++) {
      tempSet.push(nums[i]);

      backtrack(resultSets, tempSet, nums, i + 1);

      tempSet.pop();
    }
  };

  backtrack(ans, [], nums, 0);
  return ans;
};

console.log(subsets([1, 2, 3])); // Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
