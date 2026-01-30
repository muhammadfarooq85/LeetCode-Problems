// 415. Add Strings

// Problem statement:

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2 as a string. You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Understand the problem first:

// hme do non-negative int diye gaye hy jo ke string ki form me hy hum ne unko add karna hy aur result bhi string me dena hy bina kisi built-in library ya direct conversion ke.

// Approach and Solution:

// hum log two pointer aur math ki simple addition ka use karenge. hum last digit se start karenge dono strings ke aur carry ko bhi handle karenge.

var addStrings = function (num1, num2) {
  let map = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;

    if (i >= 0) sum += map[num1[i]];
    if (j >= 0) sum += map[num2[j]];

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
};

console.log(addStrings("11", "233")); // Output: "244"
