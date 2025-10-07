// 594. Longest Harmonious Subsequence

// Problem statement

// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1. Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// Understand the problem statement

// hme aik integer of array of nums dia gia hy hum ne longest possible subsequence ki length return krni hy

// Solution

// dekhe uno ne kaha hy ke hum ne jo bi subsequence bnani hy us me se min aur max ka difference aik hona chahie isliye hum smart approach use krte hoe hum aik hash map me freq count kre ge aur then pir ye check kre ge ke next ane wala number us se plus hone wala ho tb hi tu hum aik ka difference nikale ge

var findLHS = function (nums) {
  let hashMap = {};
  let result = 0;

  // Step 1: Count frequency of each number
  for (let num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }

  // Step 2: Check for consecutive numbers
  for (let key in hashMap) {
    let next = Number(key) + 1;
    if (hashMap[next]) {
      result = Math.max(result, hashMap[key] + hashMap[next]);
    }
  }

  return result;
};

console.log(findLHS([1, 2, 3, 4])); // 2
