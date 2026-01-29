// 409. Longest Palindrome

// Problem statement:

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters. Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Understand the problem first:

// hme aik string s diya hua hai jisme lowercase aur uppercase letters hote hain. Humein longest palindrome ka length return karna hai jo in letters se ban sakta hai. Palindrome wo string hoti hai jo aage se padhne par aur peeche se padhne par same hoti hai.

// Approach and Solution:

// hum log aik hashmap bane ge sath me ye kre ge ke agr pair hy tu result me 2 add kre denge aur end pe hum log hashmap ka size check kre ge agr size greater than 0 hy tu result me 1 add kr denge kyuki aik single character center me aa skta hy palindrome ka.

var longestPalindrome = function (s) {
  if (s.length === 1) return 1;

  let hashMap = new Map();
  let result = 0;

  for (let char of s) {
    if (hashMap.has(char)) {
      hashMap.delete(char);
      result += 2;
    } else {
      hashMap.set(char, 1);
    }
  }

  // if any unpaired character exists, one can be placed in the center
  if (hashMap.size > 0) {
    result += 1;
  }

  return result;
};

console.log(longestPalindrome("abccccdd"));
