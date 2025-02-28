// 744. Find Smallest Letter Greater Than Target

// Problem statement

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters. Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Understand the problem first...

// aik array of string hy letters  ter ke name se jo ke already ascneding order me hy aur aik aur letter dia gia hy jo ke target ke var me store hy. hum ne smallest character return krna hy agr smallest character exist nahi krta tu hum ne first character return kr dena hy.

// Solution

let nextGreatestLetter = (letters, target) => {
  for (let letter of letters) {
    if (letter > target) {
      return letter;
    }
  }
  return letters[0];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // c
