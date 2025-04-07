// 977. Squares of a Sorted Array

// Problem statement

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Understand the problem first

// hmare pas aik array of integer hy nums ka jo ke non-decreasing order yano ascending order me hy. hum ne un tmam ints ko square kr ke un ko ni asecending order me return krna hy. 

// Solution

// aik simple solution ye hy ke square kr ke then sort kr de. Doosra solution pointers ka use kr ke.

var sortedSquares = function (nums) {
  // let result = [];
  // for (let i = 0; i < nums.length; i++) {
  //     result.push(nums[i] * nums[i]);
  // };
  // return result.sort((a, b) => a - b);

  let result = new Array(nums.length);
  let startPointer = 0;
  let endPointer = nums.length - 1;
  let resultPointer = result.length - 1;
  while (startPointer <= endPointer) {
    let sQ = nums[startPointer] * nums[startPointer];
    let eQ = nums[endPointer] * nums[endPointer];
    if (sQ > eQ) {
      result[resultPointer] = sQ;
      startPointer++;
    } else {
      result[resultPointer] = eQ;
      endPointer--;
    }
    resultPointer--;
  }
  return result;
};

console.log(sortedSquares([100, 120])); // [ 10000, 14400 ]
console.log(sortedSquares([2, 4, 9, 12])); // [ 4, 16, 81, 144 ]
