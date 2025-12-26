// 1254. Number of Closed Islands

// Problem statement:

// Given a 2D grid consists of 0s (land) and 1s (water). An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s. Return the number of closed islands.

// Understand the problem first:

// hme aik two-dimensional grid di gai hai jisme 0s land ko represent karte hain aur 1s water ko. Humein closed islands ki count nikalni hai, jisme closed island ka matlab hai aisi island jo puri tarah se water se surrounded ho.

// Approach and Solution:

// hum log dfs se isko easily solve kar sakte hain. Sabse pehle hum grid ke borders par jo bhi land (0s) hain unko dfs se mark kar denge taki wo closed islands me count na ho. Uske baad hum grid ke andar jo bhi unvisited land (0s) hain unpe dfs chalakar closed islands ki count nikal lenge.

var closedIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1], // left
  ];

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 1) {
      return;
    }
    grid[r][c] = 1; // mark as visited
    for (const [dr, dc] of directions) {
      dfs(r + dr, c + dc);
    }
  };

  // Mark border lands
  for (let r = 0; r < rows; r++) {
    if (grid[r][0] === 0) dfs(r, 0);
    if (grid[r][cols - 1] === 0) dfs(r, cols - 1);
  }
  for (let c = 0; c < cols; c++) {
    if (grid[0][c] === 0) dfs(0, c);
    if (grid[rows - 1][c] === 0) dfs(rows - 1, c);
  }

  let closedIslandsCount = 0;

  // Count closed islands
  for (let r = 1; r < rows - 1; r++) {
    for (let c = 1; c < cols - 1; c++) {
      if (grid[r][c] === 0) {
        closedIslandsCount++;
        dfs(r, c);
      }
    }
  }

  return closedIslandsCount;
};

console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ])
); // Output: 2
