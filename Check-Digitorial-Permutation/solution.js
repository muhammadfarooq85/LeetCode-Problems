// 3848. Check Digitorial Permutation

// Problem statement:

// A digitorial of a non-negative integer n is the product of all positive integers less than or equal to n. The digitorial of 0 is defined to be 1.

// Understand the problem first:

// hme aik int n dia hai, aur hme check krna hai ki kya n ka digitorial n ke digits ka permutation hai ya nahi.

// Approach and Solution:

// simple approach ye hai ki hme n ke digits ka sum nikalna hai, aur us sum ka digitorial nikalna hai, aur phir check krna hai ki kya wo digitorial n ke digits ka permutation hai ya nahi. then we can sort the digits of n and the digits of the digitorial, and check if they are the same.

var isDigitorialPermutation = function (n) {
  let sum = 0;
  let n2 = n;

  while (n2 > 0) {
    let digit = Math.floor(n2 % 10);
    n2 = Math.floor(n2 / 10);

    let multiply = 1;
    for (let j = 1; j <= digit; j++) {
      multiply *= j;
    }

    sum += multiply;
  }

  let original = String(n).split("").sort().join("");
  let candidate = String(sum).split("").sort().join("");

  return original === candidate && original.length === candidate.length;
};

console.log(145); // true
