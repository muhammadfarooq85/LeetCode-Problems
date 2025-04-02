// 66. Plus One

// Problem Statement

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Understand the problem first

// hmare pas aik array of digits hy hum ne usko plus one kr ke return krn hy.

// Solution

// simply ye hy ke hum log tmam digisko nikal ke then end per akhi digit ko plus kr ke override kr ke return ke de ge.

var plusOne = function (digits) {
  return [
    ...digits.slice(0, digits.length - 1),
    digits[digits.length - 1] + 1,
  ];
};


console.log(plusOne([4, 3, 2, 1])); // [ 4, 3, 2, 2]
console.log(plusOne([1, 2, 3])); // [ 1, 2, 4]
