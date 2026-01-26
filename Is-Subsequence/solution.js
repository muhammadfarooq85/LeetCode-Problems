// 392. Is Subsequence

// Problem statement:

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise. A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Understand the problem first:

// hme do string s aur t diye gaye hain hume ne ye check karna hai ki kya s string t ka subsequence hai ya nahi.

// Approach and Solution:

// Hum do pointers ka use karenge, ek pointer s string ke liye aur dusra pointer t string ke liye. Hum t string ko iterate karenge aur jab bhi hume s string ka current character milta hai, hum s pointer ko aage badha denge. Agar hum s pointer ko end tak le ja pate hain, to iska matlab hai ki s string t ka subsequence hai.

var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;

  let sPt = 0;
  let tPt = 0;

  while (sPt < s.length && tPt < t.length) {
    let first = s[sPt];
    let second = t[tPt];

    console.log(first, "<==>", second);

    if (first === second) {
      sPt++;
      tPt++;
    } else if (first !== second) {
      tPt++;
    }
  }

  return sPt === s.length; // it means we have found all characters of s in t in order
};

log(isSubsequence("abc", "ahbgdc")); // true
