// 1706. Where Will the Ball Fall

// Problem statement:

// You have a 2-D grid of size m x n representing a box, and you have n balls. The box is open on the top and bottom sides. Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left.

/*A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as 1.
A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as -1.
We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a "V" shaped pattern between two boards or if a board redirects the ball into either wall of the box. Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box.*/

// Understand the problem first:

// hme aik 2d matrix dia hai jisme 1 aur -1 hote hai
// 1 ka matlab ball right jayegi
// -1 ka matlab ball left jayegi
// hme ye dekhna hai ki ball kaha giregi ya kaha atak jayegi

// Approach and Solution:

// hum pure matrix ko traverse karenge
// har column se ball drop karenge
// agar ball right jayegi to hum column index ko increase karenge
// agar ball left jayegi to hum column index ko decrease karenge
// agar ball kisi wall se takrati hai ya V shape banta hai to hum -1 return karenge
// agar ball bottom tak pahuchti hai to hum uska column index return karenge

var findBall = function (grid) {
  const m = grid.length; // rows
  const n = grid[0].length; // columns
  const result = [];

  for (let ball = 0; ball < n; ball++) {
    let row = 0;
    let col = ball;
    let reached = true;

    while (row < m && col < n) {
      if (grid[row][col] === 1) {
        // Ball moving right
        if (col === n - 1 || grid[row][col + 1] === -1) {
          reached = false;
          break;
        }
        col++;
      } else if (grid[row][col] === -1) {
        // Ball moving left
        if (col === 0 || grid[row][col - 1] === 1) {
          reached = false;
          break;
        }
        col--;
      }
      row++;
    }

    if (reached) {
      result.push(col);
    } else {
      result.push(-1);
    }
  }
  return result;
};

console.log(
  findBall([
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1],
  ])
); // Output: [1,-1,-1,-1,-1]
