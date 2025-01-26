// 58. Length of Last Word

// Problem Statement

// Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.

// Understand the problem first...

// hme aik long string dia gia hy hum ne us string ka last word return krna hy. hr word space se separate hota hy teek hy.

// Solution

// solution ye hy ke hum ne sb se pehle is ki spaces ko remove krna hy then hum ne us string ko on the base of space (" ") split krna hy ta ke hr hr word aye. Jb hr hr word a jaye ga tu hum last word nikal le ge.

let lengthOfLastWord = function (s) {
  let lastWordLength = 0;
  let splittedS = s.trim();
  splittedS = splittedS.split(" ");
  lastWordLength = splittedS[splittedS.length - 1].length;
  return lastWordLength;
};

const string = "Hello World!";
console.log(lengthOfLastWord(string));
