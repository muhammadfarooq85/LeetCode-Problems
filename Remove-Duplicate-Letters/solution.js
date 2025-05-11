// 316. Remove Duplicate Letters

// Problem statement

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Understand the problem first

// hmare pas aik string `s` hy. apne duplicates remove krne hy. Aur ye bi ensure krna hy ke result smallest lexicographical order me ho. 

// Solution

// aik hashmap bnae ge jis me hr character ka last index ho ga. then aik stack ho ga jis me final string ko as a smallest lexicographical order me rakhe ge. aur aik set ka dsa bnae ge ta ke dekh ske ke agr wo character already hy tu usko skip kro warna ap comparison waghira kr ke stack me dalte raho. 

var removeDuplicateLetters = function (s) {
    const lastIndex = {}; // Har character ka last index
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    };
    console.log("lastIndex --->", lastIndex);
    const stack = [];
    const seen = new Set();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (seen.has(char)) continue;
        // Jab tak stack ka last char is se bada hai aur wo aage bhi aayega
        while (
            stack.length > 0 &&
            char < stack[stack.length - 1] &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            seen.delete(stack.pop());
        };
        stack.push(char);
        seen.add(char);
    };
    return stack.join('');
};
console.log(removeDuplicateLetters("addbbc")); // "abcd"
console.log(removeDuplicateLetters("abbc")); // "abc"
