// 3507. Minimum Pair Removal to Sort Array I

// Problem statement:
// You are given a 0-indexed integer array nums. In one operation, you can remove a pair of indices (i, j) such that 0 <= i < j < nums.length and nums[i] > nums[j]. Return the minimum number of operations required to make nums sorted in non-decreasing order.

// Understanding the Problem:
// We need to find the minimum number of pairs (i, j) such that nums[i] > nums[j] and remove them to sort the array in non-decreasing order. This is equivalent to finding the number of inversions in the array.

// Solution And Approach:

// we will check that if array is already sorted or not if sorted then return 0
// if not sorted then we will count the number of inversions in the array using merge sort technique
// finally return the count of inversions

var minimumPairRemoval = function (nums) {
  let arr = [...nums];
  let operations = 0;

  while (arr.length > 1) {
    // Check if array is already non-decreasing
    let isNonDecreasing = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        isNonDecreasing = false;
        break;
      }
    }
    if (isNonDecreasing) break;

    // Find minimum sum pair
    let minSum = arr[0] + arr[1];
    let minIndex = 0;

    for (let i = 1; i < arr.length - 1; i++) {
      const currentSum = arr[i] + arr[i + 1];
      if (currentSum < minSum) {
        minSum = currentSum;
        minIndex = i;
      }
    }

    // Merge the pair
    arr.splice(minIndex, 2, minSum);
    operations++;
  }

  return operations;
};
console.log(minimumPairRemoval([5, 3, 2, 4, 1])); // Output: 2
