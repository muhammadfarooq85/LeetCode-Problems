// 14. Longest Common Prefix

// Problem statement:-

// Write a function to find the longest common prefix string amongst an array of strings.  If there is no common prefix, return an empty string "".

// Undersrtand the problem first...

// hme aik function likhna hy jo ke hme array of string se common prefiox all of sth available string se nikal kr de. Agr ki common prefix nahi milta tu ( "" ) empty string retyrn krna hy.

// Solution

// hum outer loop me first string per loop kr rahe hy. then hum ye chk kra rahe hy ke agr postition i pe pada hoa char doosre string ki length se match nahi krta ya other string current character se match nahi krte tu abhi nahi mia result. Agr match ho jata hy tu resturn kr de ge current character.

let findLongestCommonPrefix = (strs) => {
  if (strs.length === 0) return ""; // Return empty if array is empty
  let result = "";

  // Loop through each character of the first string
  for (let i = 0; i < strs[0].length; i++) {
    let currentChar = strs[0][i]; // Character in the first string at position i

    // Loop through the other strings
    for (let j = 1; j < strs.length; j++) {
      // Check if the current string is shorter or doesn't match at index i
      if (i >= strs[j].length || strs[j][i] !== currentChar) {
        return result; // Return result so far if there's a mismatch
      }
    }

    // If the character is the same across all strings, add it to the result
    result += currentChar;
  }

  return result;
};

const strings = ["flower", "flow", "flight"];
console.log(findLongestCommonPrefix(strings));
