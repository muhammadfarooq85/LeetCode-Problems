// 20. Valid Parentheses

// Problem Statement

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Understand the problem first

// hmare pas aik string `s` is me prefinded chars hy hum ne ye btana hy ke wo valid string hy ya nahi. Hme kesa pta chle ga ke wo valid hy ya invalid hy us ke liye ino ne crieteria di hoa hy.

// Solution

// hal hy ke hum hashmap ka use kre ge aur ye dekhe ge ke agr ty ane wala char opening brackit hy tu push kr do warna agr wo closing hy aur top wala char same opening hy tu usko pop kr do. Agr hmare pas empty stack rahe jaye ga tu means hmara string valid otherwise in-valid.

var isValid = function (s) {
  // Stack to keep track of opening brackets
  let stack = [];

  // Map to associate closing brackets with their corresponding opening brackets
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Loop through each character in the string
  for (let char of s) {
    // If the character is an opening bracket, push it to the stack
    if (bracketMap[char] === undefined) {
      stack.push(char);
    } else {
      // If the character is a closing bracket, check if it matches the top of the stack
      if (stack.length > 0 && stack[stack.length - 1] === bracketMap[char]) {
        stack.pop();
      } else {
        return false; // Either the stack is empty or the top of the stack doesn't match
      }
    }
  }

  // If the stack is empty, all brackets are matched correctly
  return stack.length === 0;
};

console.log(isValid("()[]{}")); // true
