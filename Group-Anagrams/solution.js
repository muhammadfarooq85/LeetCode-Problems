// 49. Group Anagrams

// Problem statement

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Understand the problem first...

// hme aik array of string strs dia gia hy hum ne us array me se jo anagrams words ko group krna hy. Anagrams words wo hote hy jis me letters same hote hy lekin words different hote hy.

// Solution

// iske liye hum hasmaps data stucture ke sahara le ge.

let groupAnagrams = function (strs) {
  let hashMap = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedWord = strs[i].split("").sort().join("");
    if (!hashMap[sortedWord]) {
      hashMap[sortedWord] = [];
    }
    hashMap[sortedWord].push(strs[i]);
  }
  let keys = Object.keys(hashMap);
  let result = [];
  for (let key of keys) {
    result.push(hashMap[key]);
  }
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
console.log(groupAnagrams([""])); // [""]
