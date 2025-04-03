// 1464. Maximum Product of Two Elements in an Array

// Problem statment

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Understand the problem first

// hmare pas aik array of int nums dia gia hy hum ne do different indices se num ko utana hy aur givern condition ke mutabiq ye dekhna hy ke kin do vlaues ka product maxmium hy.

// Solution

// simply sb se pehle tmam values ke product ko aik array me push kr de ge then ye dekh le g konsa product maximum hy.

var maxProduct = function (nums) {
  let maxValues = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      maxValues.push((nums[i] - 1) * (nums[j] - 1));
    }
  }
  let maxNum = maxValues[0];
  // return Math.max(...maxValues);
  for (let num of maxValues) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
};

console.log(maxProduct([2, 3, 5, 6, 7])); // 30
