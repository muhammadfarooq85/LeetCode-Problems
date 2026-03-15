// 96. Unique Binary Search Trees

// Problem statement:

// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Understand the problem first:

// hme aik int n dia hai, aur hme ye return krna hai ki kitne unique binary search trees ban skte hain jisme n nodes hon aur un nodes ke values 1 se n tak hon.

// Approach and Solution:

// hme iske liye recursion aur memoization ka use kr skte hain. hum har possible root node ke liye left aur right subtrees ke unique BSTs ka count nikalenge, aur un counts ko multiply karenge kyunki left aur right subtrees independent hote hain.

var numTrees = function (n) {

    let memo = new Array(n + 1).fill(-1);

    function solve(nodes) {
        if (nodes <= 1) return 1;

        if (memo[nodes] !== -1) {
            return memo[nodes];
        }

        let total = 0;

        for (let root = 1; root <= nodes; root++) {
            let left = solve(root - 1);
            let right = solve(nodes - root);

            total += left * right;
        }

        memo[nodes] = total;
        return total;
    }

    return solve(n);
};

console.log(numTrees(2)); // Output: 2
