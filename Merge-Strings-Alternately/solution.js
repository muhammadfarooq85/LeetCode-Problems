// 1768. Merge Strings Alternately

// Problem statement

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string.

// hme do strings dia gye hy word1 aur word2. in dono strings ko merge krna hy aise ke dono ke letters us string me alternate ho like aik letter word1 string ka aur aik letter word2 string ka aur agr koi string longer ho doosre se tu baqi letters ko wese hi dal dena hy. hum ne merged string return krna hy.

// Solution

// hum ke array initialize kre ge, then un dono ke words per at the same time jane ke liye while ke loop me do pointers lgae ge aur hme aik sath jana hy kiyuke while loop me increment ka concept nahi hota tu hum iske liye i aur j ka counter use kre ge aur jb loop given cond ki waja se break ho ga tu hum baqi letters jo string longer hoa usko wese hi append kra de ge.

var mergeAlternately = function (word1, word2) {
  let mergedString = [];
  let i = 0;
  let j = 0;
  while (i < word1.length && j < word2.length) {
    mergedString.push(word1[i], word2[j]);
    i += 1;
    j += 1;
  }
  if (i !== word1.length) {
    mergedString.push(word1.slice(i));
  }
  if (j !== word2.length) {
    mergedString.push(word2.slice(j));
  }
  return mergedString.join("");
};

console.log(mergeAlternately("ab", "pqrs")); // apbqrs
