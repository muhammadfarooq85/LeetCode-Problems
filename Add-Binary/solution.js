// 67. Add Binary

// Problem statement

// Given two binary strings a and b, return their sum as a binary string.

// Understand the problem first

// hme do string a and b diye jaye ge hum ne unko binary sum karna hai aur result bhi binary me dena hai

// Approach and solution

// hum is me carry two pointers use karenge ek pointer string a ke end pe aur dusra string b ke end pe rakhenge
// fir hum dono string ke corresponding digits ko add karenge saath me carry ko bhi add karenge
// agar sum 2 se zyada hua to hum carry ko 1 set kar denge aur result me sum % 2 ko add karenge
// ye process tab tak chalega jab tak dono strings ke sare digits process na ho jaye aur carry bhi 0 na ho jaye

var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    // Get current digits (0 if out of bounds)
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    // Calculate sum and carry
    const sum = digitA + digitB + carry;
    result = (sum % 2) + result; // Binary digit
    carry = Math.floor(sum / 2); // Carry over

    // Move pointers
    i--;
    j--;
  }

  return result;
};

console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
