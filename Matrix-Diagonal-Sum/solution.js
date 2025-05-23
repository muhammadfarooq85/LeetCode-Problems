// 1572. Matrix Diagonal Sum

// Problem statement

// Given a square matrix mat, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Understand the problem first

// hamre pas aik square matrix(which has row and columns are equal) hme uske diagonal ko return krna hy yad rahe ke us ke hme primary ke tmam ko sum krna hy aur secondary diagonal ke tamam elemnts jo ke primary ka hissa nahi hy.

// Solution

// simple nested loop chlae ge aur aik makhsos pattern pe bna hoe diagonal ki values ko uta le ge. Isko mazeed acha smjane ke liye leetcode problem diagram bnae aur usko lable kre rows and columns index ke sath. Ap dekhe ge ke primary diagonal me aik makhson pattern bne ga.

let diagonalSum = function (mat) {
    let n = mat.length;
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (i === j || i + j === n - 1) {
                sum += mat[i][j];
            }
        }
    }
    return sum;
};

console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 25
console.log(diagonalSum([[0, 1, 3], [7, 8, 6], [9, 9, 6]])); // 26
