// 64. Minimum Path Sum

// Problem statement:

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Understand the problem first:

// hme aik grid diya hai jisme non-negative numbers hain. Hme top left se bottom right tak ka path find karna hai jisme sum minimum ho. Hme sirf right aur down move kar sakte hain.

// Approach and Solution:

// hum log dynamic programming ka use karenge. Hum log ek 2D array banayenge jisme dp[i][j] represent karega minimum path sum to reach cell (i, j).

var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let memo = Array.from({ length: m }, () => new Array(n).fill(-1));

    function solve(i, j) {
        if (i === m - 1 && j === n - 1) {
            return grid[i][j];
        }

        if (i >= m || j >= n) {
            return Infinity;
        }

        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        let down = solve(i + 1, j);
        let right = solve(i, j + 1);

        memo[i][j] = grid[i][j] + Math.min(down, right);

        return memo[i][j];
    }

    return solve(0, 0);
};