// 1609. Even Odd Tree

// Problem statement:

// Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.

/*A binary tree is named Even-Odd if it meets the following conditions:

The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).*/

// Understand the problem first:

// hme aik binary tree dia gia hy humne ye btana hy ke wo even odd tree hy ya nahi. Even odd tree ke scenario oper likha hy ap dekh le

// Approach and Solution:

// Hum log dfs ka use kr ge aur dekhe ge ke agr wo leaf node hy tu usko remove kr de ge just aur wahi tree return kr de ge.

var isEvenOddTree = function (root) {
    let queue = [root];
    let level = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let prev = null;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            if (level % 2 === 0) {
                // Even level → values must be ODD and increasing
                if (node.val % 2 === 0) return false;
                if (prev !== null && node.val <= prev) return false;
            } else {
                // Odd level → values must be EVEN and decreasing
                if (node.val % 2 !== 0) return false;
                if (prev !== null && node.val >= prev) return false;
            }

            prev = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        level++;
    }

    return true;
};
