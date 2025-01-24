// 136. Single Number

// Problem Statement

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Understand the problem first...

// hme aik nums ka integer ka array di gia hy jis me btae gia hy ke hr element twice (two) dafa repeat ho raha hy sirf aik ke ilawa. Hme wo aik number find krna hy jo aik mrtaba aea hy. Age wali statement mje bi smj nahi because of not proper knowldege of DSA.😢

// Solution

// Hm sb se pehle loop lgae ge aur hr num ko nikal le ge then hr number ko aik object me dalte rahe ge ke agr wo hy pehle se us object me tu uska ko increemnt kr do warna agr aik mrtaba hy tu us ki value 1 hi krni hy. Then us object per for in loop lga ke hum us aik value wale number ko nikal ke return kr de ge.

let findSingleNumber = function (n) {
  let uniqueChars = {};
  let result = null;
  for (let index = 0; index < n.length; index++) {
    if (uniqueChars[n[index]]) {
      uniqueChars[n[index]]++;
    } else {
      uniqueChars[n[index]] = 1;
    }
  }

  for (const key in uniqueChars) {
    if (uniqueChars[key] === 1) {
      result = key;
    }
  }
  return parseInt(result);
};

let nums = [2, 2, 1];
console.log(findSingleNumber(nums));
