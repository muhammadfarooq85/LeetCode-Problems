// 205. Isomorphic Strings

// Problem statement:

// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

// Understand the problem first:

// Hme do string s aur t diye gaye hain.
// Hme check karna hai ki kya ye dono strings isomorphic hain ya nahi.
// Isomorphic strings ka matlab hai ki ek string ke characters ko replace karke dusri string banayi ja sakti hai.
// Har character ko ek hi character se replace karna hoga aur order bhi preserve karna hoga.
// Koi bhi do characters same character se map nahi ho sakte, lekin ek character khud se map ho sakta hai.

// Approach and Solution:

// Hum ek hash map ka use karenge jisme hum characters ka mapping store karenge.
// Hum dono strings ko ek saath iterate karenge aur har character ke liye check karenge ki kya wo pehle se map ho chuka hai ya nahi.
// Agar map ho chuka hai, to hme check karna hoga ki wo sahi character se map ho raha hai ya nahi.
// Agar map nahi hua hai, to hme ensure karna hoga ki koi aur character us character se map nahi ho raha hai.
// Agar sab checks pass ho jate hain, to strings isomorphic hain, warna nahi hain.

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapSToT = {}; // Mapping from characters in s to characters in t
  const mapTToS = {}; // Mapping from characters in t to characters in s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check mapping from s to t
    if (!mapSToT[charS]) {
      mapSToT[charS] = charT;
    } else if (mapSToT[charS] !== charT) {
      return false;
    }

    // Check mapping from t to s
    if (!mapTToS[charT]) {
      mapTToS[charT] = charS;
    } else if (mapTToS[charT] !== charS) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
