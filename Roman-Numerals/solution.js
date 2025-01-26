// 13. Roman to Integer

// Problem Statement

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Understand the problem first...

// hme aik input dia jaye ga jo ke roman me ho ga hum ne uska integer dena hy. That's it.

// Solution:-

// iske liye simple sa formula hy ke agr input ka current character chota hy next one se then hum next wale character se minus kre ge current ko aur agr bada hy current character next one ko plus kre ge current me. Hme iske liye zaroori hy ke hme un tmam seven numerals ki  vlaues pta honi chaie. Sb se pehle hum loope lgae ge su inmput per. us ke tmam chars ko get kr le ge. then hum current aur next value nikale ga corresponding input ke chars ki. Aur pir hum chk kre ge current aur next one ko. Agr chota hy current tu minus otherwise plus kr do.

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  // Loop through the string, checking each character
  for (let i = 0; i < s.length; i++) {
    const currentVal = romanMap[s[i]]; // current numeral value
    const nextVal = romanMap[s[i + 1]]; // next numeral value

    if (currentVal < nextVal) {
      console.log("chotto", currentVal);
      result -= currentVal;
      console.log((result -= currentVal));
    } else {
      result += currentVal;
    }
  }

  return result;
}

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("CMMXCIV")); // Output: 1994
