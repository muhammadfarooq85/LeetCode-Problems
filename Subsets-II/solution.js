// 90. Subsets II

// Problem statement:

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.

// Understand the problem first:

// hme aik array diya hai jisme duplicate elements ho sakte hain. Humein us array ke saare possible subsets nikalne hain, lekin ye ensure karna hai ki koi bhi subset duplicate na ho.

// Approach and Solution:

// hum is array ko pehle sort karenge taaki duplicate elements ek saath aa jayein. Phir hum backtracking ka use karenge taaki hum saare possible subsets generate kar sakein. Jab hum subset bana rahe hote hain, toh hum check karenge ki agar current element pichle element ke barabar hai aur pichle element ko include nahi kiya gaya tha, toh hum current element ko skip kar denge taaki duplicate subsets na banein.

var subsetsWithDup = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  var backTrack = function (path, start) {
    ans.push([...path]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }

      path.push(nums[i]);
      backTrack(path, i + 1);
      path.pop();
    }
  };
  backTrack([], 0);
  return ans;
};

console.log(subsetsWithDup([1, 2, 2])); // Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
