// 1528. Shuffle String

// Problem statement

// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string. Return the shuffled string.

// Understand the problem first

// hme aik string `s` dia gia hy aur same length ka array of indices. doosre wala constant is liye hy ke hum ne kist string ke char ko kis jagah per rakhna hy. Hum ne shuffled string retrun krna hy

// Soltuion

// hum ke array le ge jis ko empty string se fill kr le ge s ki length tk. aur then us mentioned indices per us empty string per ye value override krte jaye ge.

var restoreString = function (s, indices) {
  let result = [].fill("", s.length);
  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i];
  }
  return result.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); // leetcode
