// 1446. Consecutive Characters

// Problem statement

// The power of the string is the maximum length of a non-empty substring that contains only one unique character. Given a string s, return the power of s.

// Understand the problem first

// hmare pas aik string hy jis me alphabatical letters hy hum ne ye dekhna hy konsa aesa letter hy jis ki ziada length ho aur hum logo ne length ko return krna hy. 

// Solution

// 

let maxPower = (s) => {
    let max = 1;
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 1;
        }
    }

    return Math.max(max, count);
}

console.log(maxPower("leetcode")); // 2
console.log(maxPower("aabbbcccc")); // 4
