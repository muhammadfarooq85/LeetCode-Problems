// 258. Add Digits

// Problem statement

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Understand the problem first

// hme aik int num dia gia hy hum ne repeatedly us ke tmam digits ko add kr ke uska aik digit tb tk na a jaye return nahi krna. Meand only one digit at the end return krna hy.

// Solution

// dekhe one digit kaha se kaha tk ata hy. means 0 to 9 tk. Bs isi logic ko use kr ke hum log answer tlash kr le ge.

var addDigits = function (num) {
  if (num === 0) {
    // if number is zero then answer will be 0
    return 0;
  } else if (num % 9 === 0) {
    // if we divide the number to 9 and its reminder is equal to zero then answer will be 0
    // practical it...
    return 9;
  } else {
    // if we divide the number to 9 and its reminder is not equal to zero then answer will be 9
    // practical it...
    return num % 9;
  }
};

console.log(addDigits(38)); // 2
