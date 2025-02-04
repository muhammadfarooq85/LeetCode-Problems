// 2351. First Letter to Appear Twice

// Problem statement

//  Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Understand the problem first...

// hmare pas aik string hy jis me lowercase english letters ho ge hum ne jo pehl character repeat ho raha hy us ko return krna hy.

// Solution

// solution ye ke hum ne tmam chars ko loop ke through nikal ke object me store krwana hy aur dekhna hy ke konsa letter repeat ho raha hy jo repeat ho raha hy usko return kr dena hy.

var repeatedCharacter = function (s) {
  let uniqueChars = {}; // This will store the count of each character

  for (let str of s) {
    if (uniqueChars[str]) {
      return str; // Return the first character that repeats
    } else {
      uniqueChars[str] = 1; // Mark the character as seen
    }
  }

  return ""; // Return an empty string if no character repeats
};

console.log(repeatedCharacter("abcdeee")); // e
console.log(repeatedCharacter("abcbaaa")); // b
console.log(repeatedCharacter("abccbaacz")); // c
