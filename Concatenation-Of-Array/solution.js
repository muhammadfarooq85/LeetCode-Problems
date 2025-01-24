// 1929. Concatenation of Array

// Problem Statement

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed). Specifically, ans is the concatenation of two nums arrays. Return the array ans.

// Understand the problem first...

// hme aik array of nums dia gia hy jis ki length n hy. Maan li gia uski length 3 hy. Tu hm ne jo array return krna hy wo 2n ka hoa ga. Mtlb us ki length 6 ho gi. Jo array return ho ga uska name ans ho ga.

// Solution

// hme nested loop lgana ho ga. aik ans ka array bnae ge. Jis me outer loop 2 mrtaba iterate ho ga aur inner wala tmama number pe iterate ho ga aur us nested loope me hum ane wale hr number ko `ans` ke array me push kr de ge.

let duplicateArray = (n) => {
  let ans = [];
  for (let i = 1; i <= 2; i++) {
    for (let j = 0; j < n.length; j++) {
      ans.push(n[j]);
    }
  }

  return ans;
};
const nums = [1, 2, 1];
console.log(duplicateArray(nums));
