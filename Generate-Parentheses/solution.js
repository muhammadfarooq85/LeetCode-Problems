// 22. Generate Parentheses

// Problem statement:

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Understand the problem first:

// hme n koi number dia gia hy hum ne possible combinations of well-formed parentheses nikalni hy

// Approach and Solution:

// hum log backtracking ko use kre ge aur string ko build kre ge step by step
// hum do conditions check kre ge
// 1. agar open parentheses ki count n se kam hy to hum ek open parentheses add kr skte hy
// 2. agar close parentheses ki count open parentheses se kam hy to hum ek close parentheses add kr skte hy
// jab string ki length 2*n ho jaye to hum us string ko result array me add kr denge

var generateParenthesis = function (n) {
  let ans = [];

  let backTrack = (string, openParentheses, closeParentheses) => {
    if (string.length === 2 * n) {
      ans.push(string);
      return;
    }

    if (openParentheses < n) {
      backTrack(string + "(", openParentheses + 1, closeParentheses);
    }

    if (closeParentheses < openParentheses) {
      backTrack(string + ")", openParentheses, closeParentheses + 1);
    }
  };

  backTrack("", 0, 0);
  return ans;
};

console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
