// 344. Reverse String

// Problem statement

// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

// Understand the problem first

// hme aik array of string s di gai hy hum ne usko reverse kr ke return krna hy

// Solution

// hum isko inbuilt method se bi kr skte hy aur revrerse loop lga ke bi kr skte hy

var reverseString = function (s) {
  // return s.reverse()
  let result = [];
  for (let num = s.length - 1; num >= 0; num--) {
    result.push(s[num]);
  }
  return result;
};

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
