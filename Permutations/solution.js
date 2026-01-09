// 46. Permutations

// Problem statement

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Understand the problem first:

// hme aik array of distinct integers di gai hai. hum ne us array ke tamam mumkin permutations return karne hain. permutations ka matlab hai ke hum array ke elements ko is tarah arrange karen ke har possible order mil jaye.

// Approach and Solution:

// hum log backtracking approach use karenge. hum ek temporary list banayenge jisme hum current permutation store karenge aur ek boolean array use karenge jisme hum track karenge ke kaunse elements already use ho chuke hain. jab tak temporary list ki length original array ke barabar nahi ho jati, hum har element ko check karenge ke kya wo already use ho chuka hai. agar nahi hua to us element ko temporary list mein add karenge, usko use mark karenge aur recursive call karenge. jab hum wapas aayenge to hum us element ko temporary list se remove karenge aur usko unused mark karenge. is tarah se hum tamam permutations generate kar sakte hain.

var permute = function (nums) {
  const result = [];
  const used = Array(nums.length).fill(false);

  function backtrack(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      backtrack(path);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
