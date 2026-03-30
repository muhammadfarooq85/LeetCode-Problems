// 73. Set Matrix Zeroes

// Problem statement:

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.

// Understand the problem first:

// hme aik matrix dia gia hy jaha bi hme kisi matrix me zero dekhe tu hume us row and col ko zero fill krna hy.

// Approach and Solution:

// hum log isko extra space se kr skte hy but hume in-place krna hy. Isliye hum log is me markers ka use kre ge. agr hume kahi bi kahi se row me zero ho ga tu hum us row ke pehle cell aur us col ke pehle cell ko zero kr de ge. then pir hum log 1th row aur 1th col se start kre ge na ke 0th row aur 0th col se. Lekin is me masla hy ke agr 0th row aur 0th col se start kre ge tu high chance ho ga ke ghlt solution aye ga.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  // Check first column
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
    }
  }

  // Check first row
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
    }
  }

  // Mark rows & cols
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Set zeroes based on marks
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // First row
  if (firstRowZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  // First column
  if (firstColZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
); // [[1,0,1],[0,0,0],[1,0,1]]
