// 443. String Compression

// Problem statement

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s.For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars.Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.

// Understand the problem first

// ahme aik array of string dia gia hy jis me alphabetical letters hy hum ne su array of string ko compress kr ke uski length return krni hy.

// Solution

// 

var compress = function (chars) {

    let count = 1;
    let ans = [];
    ans.push(chars[0])
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] !== chars[i - 1]) {
            if (count > 1) {
                ans.push(...count.toString())
            }
            ans.push(chars[i]);
            count = 1;
        } else {
            count++;
        }
    }

    if (count > 1) {
        ans.push(...count.toString())
    }

    for (let i = 0; i < ans.length; i++) {
        chars[i] = ans[i];
    }
    return ans.length

    // let hashMap = {}
    // for (let letter of chars) {
    //     if (hashMap[letter]) {
    //         hashMap[letter]++;
    //     } else {
    //         hashMap[letter] = 1;
    //     };
    // };
    // let ans = [];
    // let keys = Object.keys(hashMap);
    // for (let key of keys) {
    //     if (chars.length === 1) {
    //         return chars;
    //     }
    //     ans.push(key);

    //     ans.push(hashMap[key].toString());
    // };
    // return ans;
};
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a"])) // 1