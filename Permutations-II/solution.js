// 47. Permutations II

// Problem statement:

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Understand the problem first:

// Humein ek array of numbers diya gaya hai jisme duplicates ho sakte hain. Humein uske saare unique permutations return karne hain.

// Approach and Solution:

// Hum backtracking approach use karenge jisme hum recursively permutations banayenge aur ensure karenge ki duplicates na aaye. Iske liye hum array ko sort karenge aur check karenge ki agar current element previous element ke barabar hai to usse skip kar denge.

var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b); //

  const res = []; // final permutations
  const used = Array(nums.length).fill(false); // [false, false, false]

  function backtrack(path) {
    // base case
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // seeing current element
      if (used[i]) continue;
      // to skip duplicates
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(nums[i]);

      backtrack(path);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return res;
};

console.log(permuteUnique([1, 1, 2])); // Output: [[1,1,2], [1,2,1], [2,1,1]]
