// 242. Valid Anagram

// Problem Statement

// Given two strings s and t, return true if t is an  anagram of s, and false otherwise.

// Understand the problem first...

// hme do words dia gye agr wo aik doosre ke anagrams hy tu true warna false return kro do. Anagrams wo words hote hy jin ki lengths bi same hoti hy aur doosra word jo us ke against hota hy us ko rearrange kre tu wo same word bnta hy.

// Solution

// simple sa solution ye hy ke pehle chk kre ke agr un ki length same nahi hy tu wo anagram ho hi nahi skta. doosra ye check kre ge ke agr smae hy tu then dono words ko sort kr ke compare kre ge.

let isAnagram = function (s, t) {
  let result = false;
  if (s.length !== t.length) {
    result = false;
  } else if (s.length === t.length) {
    let a = s.split("").sort().join("");
    let b = t.split("").sort().join("");
    if (a === b) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};
let word1 = "anagram";
let word2 = "nagaram";
console.log(isAnagram(word1, word2));
