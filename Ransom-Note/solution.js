// 383. Ransom Note

// Problem statement:

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.

// Understand the problem first:

// hme do string ransomNote aur magazine diye gaye hain. Hume check karna hai ki kya ransomNote ko magazine ke letters se banaya ja sakta hai ya nahi. Har letter ko sirf ek baar use kiya ja sakta hai.

// Approach and Solution:

// hum pehle magazine ke letters ka count karenge using a hash map. Phir hum ransomNote ke har letter ko check karenge ki kya wo magazine mein available hai ya nahi. Agar koi letter magazine mein nahi milta ya uska count zero ho jata hai, to hum false return kar denge. Agar hum sab letters ko successfully check kar lete hain, to hum true return kar denge.

var canConstruct = function (ransomNote, magazine) {
  let freqMap = {};

  for (let char of magazine) {
    if (!freqMap[char]) {
      freqMap[char] = 1;
    } else {
      freqMap[char] += 1;
    }
  }

  for (let char of ransomNote) {
    if (!freqMap[char]) {
      return false;
    } else if (freqMap[char] > 0) {
      freqMap[char] -= 1;
    }
  }

  return true;
};

console.log(canConstruct("a", "b")); // false
