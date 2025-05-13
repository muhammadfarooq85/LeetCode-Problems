// 1897. Redistribute Characters to make all Strings Equal

// Problem statement

// You are given an array of strings words (0-indexed). In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j]. Return true if you can make every string in words equal using any number of operations, and false otherwise.

// Understand the problem first

// hmare pas aik array f string words hy hum ne ye btana hy ke us array ke words ke characters kia tmam words me same hy 

// Solution

// simply ye chk kr le ge ke konse konse letter kitne bar aye hy aur then unko words ki length pe divide kr ke dekh le ge kia ye euqally distribute hote hy ya nahi 

let makeEqual = (words) => {
    let freq = new Array(26).fill(0);
    for (let word of words) {
        // "abc"
        for (let char of word) {
            // "a", "b", "c"
            let index = char.charCodeAt(0) - "a".charCodeAt(0);
            freq[index]++;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (freq[i] % words.length !== 0) {
            return false;
        }
    }

    return true;
};

console.log(makeEqual(["aabb", "abcab", "cccc"])); // false
console.log(makeEqual(["abc", "bca", "cba"])); // true
console.log(makeEqual(["abc", "aabc", "bc"])); // true
