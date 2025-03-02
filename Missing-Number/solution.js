// 268. Missing Number

// Problem statement

// Given an array `nums` containing `n` distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Understand the problem first

// hme aik array nums dia gia hy jis me 0 se le kr n tk numbers dia gia hy hum ne use array me se missing num find krna hy. Ab yaha 0, se n ka mtlb hy like example 2 ko dekhe leetcode me tu yaha 0 , 2 ki range hy kyu array of nums me do number hy.

// Solution...

// sb se pehle length nikal ke hum un tmam numbers ka sum nikal le ge then loop lga ke values ko minus krte jaye ge total me se

var missingNumber = function (nums) {
  let numsLength = nums.length;
  let total = (numsLength * (numsLength + 1)) / 2;
  for (let num of nums) {
    total -= num;
  }
  return total;
};

console.log(missingNumber([0, 1])); // 2
