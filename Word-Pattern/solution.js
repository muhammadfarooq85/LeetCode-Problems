// 290. Word Pattern

// Problem statement:

// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Understanding the Problem:

// hme do string s aur pattern dia hai
// hme ye check krna hai ki kya s pattern ko follow krta hai ya nhi
// iska matlab hai ki pattern ke har letter ka ek unique word hona chahiye s me
// aur har word ka ek unique letter hona chahiye pattern me

// Approach and Solution:

// 1. Split the string s into words using space as a delimiter.
// 2. Check if the length of the pattern and the number of words are the same. If not, return false.
// 3. Create two maps: one for mapping characters in the pattern to words in s, and another for mapping words in s to characters in the pattern.
// 4. Iterate through each character in the pattern and the corresponding word in s:
//    - If the character is already in the first map, check if it maps to the current word. If not, return false.
//    - If the word is already in the second map, check if it maps to the current character. If not, return false.
//    - If neither is present in their respective maps, add the mapping to both maps.
// 5. If we complete the iteration without conflicts, return true.

function wordPattern(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }

  const charToWordMap = new Map();
  const wordToCharMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charToWordMap.has(char)) {
      if (charToWordMap.get(char) !== word) {
        return false;
      }
    } else {
      charToWordMap.set(char, word);
    }

    if (wordToCharMap.has(word)) {
      if (wordToCharMap.get(word) !== char) {
        return false;
      }
    } else {
      wordToCharMap.set(word, char);
    }
  }

  return true;
}

// Example usage:
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("abba", "dog dog dog dog")); // false
