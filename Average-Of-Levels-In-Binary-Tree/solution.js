// 637. Average of Levels in Binary Tree

// Problem statement:

// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

// Understand the problem first:

// hme aik binary tree di hui hai, aur hme har level ke nodes ka average nikalna hai. Average nikalne ke liye hme har level ke nodes ka sum aur count nikalna padega, phir sum ko count se divide kar dena hoga.

// Approach and Solution:

// hum log BFS (Breadth First Search) ka use karenge, jisme hum log level by level tree ko traverse karenge. Har level ke nodes ka sum aur count nikalenge, aur phir average calculate karenge.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const result = [];  
    const queue = [root];
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        let sum = 0;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(sum / levelSize);
    }

    return result;
};
