// 74. Search a 2D Matrix

// Problem statement:

// Given an integer target, return true if target is in matrix or false otherwise. You must write a solution in O(log(m * n)) time complexity.

// Understand the problem first:

// hme aik matrix dia gia hy hum ne is matrix me target ko find krna hy

// Approach and Solution:

// hum isko simple O(m*n) se kr skte hy but hme O(log(m*n)) mtlb binary search implement kr ke cheeze kr skte hy.

// var searchMatrix = function (matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (target === matrix[i][j]) {
//                 return true;
//             };
//         };
//     };

//     return false;
// };

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let row = Math.floor(mid / n);
    let col = mid % n;

    let value = matrix[row][col];

    if (value === target) return true;
    else if (value < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
); // true
