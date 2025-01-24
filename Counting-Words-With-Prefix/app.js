// Problem Statement
// 2185. Counting Words With a Given Prefix

// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.

// Understand the problem first...

// hme aik words ka array dia gia hy aur aik prefix ke name se array dia gia hy. Hum ne ye count krna hy ke kitne aese words hy jo given prefix se match krte hy.

// Solution...

// hum ne sb se pehle hr words ko bahir nikalana hy for loop se. Aur then hum ye chk kre ge konse words us given prefix se start hote hy jitne start hoe tu un ko count kr ke return kr de ge.

let countWordsThatStartsWithGivenPrefix = function (w, p) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    // console.log(w[i]); // individual words...
    if (w[i].startsWith(p)) {
      count += 1;
    }
  }
  return count;
};

const words = ["pay", "attention", "practice", "attend"];
const prefix = "at";
console.log(countWordsThatStartsWithGivenPrefix(words, prefix)); // 2
