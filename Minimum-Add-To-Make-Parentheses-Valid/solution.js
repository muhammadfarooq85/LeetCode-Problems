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

// hme aik string dia gia hy jis me only rounded bracis ho gi hy hum ne ye btana hy ke aur kitni bracis aye git tu ye string valid ho ga. Hum inside string interchage nahi kr skti hy hume additional hi add krni pade gi

// Solution

// aik edge case hy ke agr uski length aik chae wo opening ya closing ho tb hme 1 hi return krna hy. simply stack bnae ge aur agr stack me last wali opening hy aur ane wali closing bracis hy tu pop krwa do warna count ko increment krwa de ge. aur last me hmare pass stack me jitni uncombined bracis ho git un ko aur count ki value ko add kr ke return kr de ge.

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