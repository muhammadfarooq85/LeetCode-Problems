// 28. Find the Index of the First Occurrence in a String

// Problem statement

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Understand the problem first

//  hme do strings dia gie hy. aik ka nam needle aur doosre ka name haystack hy hum ne first occurrence needle ka hasystack me find krna hy aur uska index return krna hy. Agr nahi tu pir -1 return krna hy.

// Solution

// iske liye do appraoches hy pehli inbuilt method ke through aur doosri custom logic ke through

let strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

let strStr1 = function (haystack, needle) {
  let hLen = haystack.length; // 9
  let nLen = needle.length; // 3

  for (let i = 0; i <= hLen - nLen; i++) {
    // console.log(hLen[i] + " ===> " + nLen[i]);
    if (haystack.substring(i, i + nLen) === needle) {
      return i;
    }
  }

  return i;
};

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr1("sadbutsad", "sad")); // 0
