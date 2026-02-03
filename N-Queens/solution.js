// 51. N-Queens

// Problem statement:

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// Understand the problem first:

// hme n queens di gai hy hum ne uno n queens ko is trah place krna hy k wo ek dusre ko attack na kr sky. Yaad rahe ke chessboard n x n ka hy. Hme sare possible solutions return krne hy.

// Approach and Solution:

// Hum log backtracking approach use kren gy. Hum board ko row by row fill kren gy aur har row me queen ko aise place kren gy k wo kisi bhi pehle wali queen ko attack na kr rhi ho. Agar hum kisi row me queen ko place nahi kr skty to hum backtrack kren gy aur pichli row me queen ki position change kren gy.

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  console.log(board);

  function isValid(row, col) {
    // check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function solve(row) {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        solve(row + 1);
        board[row][col] = ".";
      }
    }
  }

  solve(0);
  return result;
};

console.log(solveNQueens(4));
