// 1020. Number of Enclaves

// Problem statement:

// You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.
// A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.
// Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

// Understand the problem first:

// hme aik m x n ka matrix dia ha jisme 0 sea ko represent krta ha or 1 land ko represent krta ha
// hme ye find krna ha k kitny land cells aisay hn jahan se hum boundary pr nhi ja skty

// Approach and Solution:

// hme is me dfs use kre ge ta k hum boundary pr jo land cells hn unko visit kr k unke adjacent land cells ko bhi visit kr lyin
// phir hum un land cells ko count kr lyin gy jo visit nhi huay hn

var numEnclaves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // DFS function to mark boundary-connected land cells as visited (0)
  const dfs = (r, c) => {
    // Check boundaries and if current cell is water (0)
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) {
      return;
    }

    // Mark current land cell as visited (convert to water)
    grid[r][c] = 0;

    // Explore all four directions
    dfs(r, c - 1); // left
    dfs(r, c + 1); // right
    dfs(r - 1, c); // up
    dfs(r + 1, c); // down
  };

  // Check first and last columns for boundary land cells
  for (let i = 0; i < m; i++) {
    // First column
    if (grid[i][0] === 1) {
      dfs(i, 0);
    }
    // Last column
    if (grid[i][n - 1] === 1) {
      dfs(i, n - 1);
    }
  }

  // Check first and last rows for boundary land cells
  for (let i = 0; i < n; i++) {
    // First row
    if (grid[0][i] === 1) {
      dfs(0, i);
    }
    // Last row
    if (grid[m - 1][i] === 1) {
      dfs(m - 1, i);
    }
  }

  // Count remaining land cells (enclaves)
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }

  return count;
};

console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
); // Output: 3
