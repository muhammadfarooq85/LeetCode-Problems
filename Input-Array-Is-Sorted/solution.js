// 167. Two Sum II - Input Array Is Sorted

// Problem statement

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2. The tests are generated such that there is exactly one solution. You may not use the same element twice. Your solution must use only constant extra space.

// Understand the problem first

// simply dekhe hmare pas aik array of int numbers hy aur target hy. hum ne do aese numbers find krne hy ke jin ka sum 9 ke equal ho aur hum ne ke index return krna hy lekin un ke index me +1 add bi krna hy.

// Solution

// Simply two pointers ko use kr ke solve kr le ge

var twoSum = function (numbers, target) {
  //   for (let i = 0; i < numbers.length; i++) {
  //     for (let j = i + 1; j < numbers.length; j++) {
  //       if (numbers[i] + numbers[j] === target) {
  //         return [i + 1, j + 1];
  //       }
  //     }
  //   }

  let result = new Array(2);
  let startPointer = 0;
  let endPointer = numbers.length - 1;
  while (startPointer < endPointer) {
    let sum = numbers[startPointer] + numbers[endPointer];
    if (sum === target) {
      result[0] = startPointer + 1;
      result[1] = endPointer + 1;
      return result;
    } else if (sum < target) {
      startPointer++;
    } else {
      endPointer--;
    }
  }
};

console.log(twoSum([2, 4, 5, -1], 4)); // [ 3, 4 ]
