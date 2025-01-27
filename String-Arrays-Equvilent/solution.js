// 1662. Check If Two String Arrays are Equivalent

// Problem Statement

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise. A string is represented by an array if the array elements concatenated in order forms the string.

// Unserstand the problem first...

// hme do arrays of strings dia gia hy hum ne ye chk krna hy ke dono arrays me strings same hy ya nahi agr same hy tu true warna false

// Solution

// simple sa solution ye hy ke hum ne tmam words ko nikalna hy aur pehle arrays ko then doosre arrays ko aur comapre kre ge agr equal hoe tu true warna false

let arrayStringsAreEqual = (a, b) => {
  let aS = "";
  let bS = "";
  for (let i = 0; i < b.length; i++) {
    aS += a[i];
  }
  for (let j = 0; j < a.length; j++) {
    bS += a[j];
  }
  return aS === bS;
};
const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1, word2)); // true
