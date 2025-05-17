// 912. Minimum Add to Make Parentheses Valid

// Problem statement

// A parentheses string is valid if and only if:
// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.

// Understand the problem first

// hme aik string dia gia hy 

// Solution

// 

let minAddToMakeValid = function (s) {
    if (s.length === 1) {
        return 1;
    }

    let stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
        } else if (stack.length > 0 && stack[stack.length - 1] === "(") {
            stack.pop();
        } else {
            count++;
        }
    }

    return stack.length + count;
};

console.log(minAddToMakeValid("(())")); // 0
console.log(minAddToMakeValid("(()")); // 1
console.log(minAddToMakeValid("((((")); // 4