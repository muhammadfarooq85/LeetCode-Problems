// 867. Transpose Matrix

// Problem statement

// Given a 2D integer array matrix, return the transpose of matrix. The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Understand the problem first

// dekhe hmare pas aik 2-D array matrix hy jis ka hum ne transpose return krna hy. Transpose se muraad simply row column and column row bn jate hy aur aik baat ke row column ke indices change ho jate hy like (0, 1) (1,0) indice pe a jata hy 

// Solution

// Hme sb se pehle row and then column ki length nikalni ho gi ta ke hum aik frzi wesa hi 2-D array bna ske. Then pir nested loop lga ke hum simply indices ko change kr le ge.

let transpose = function (matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let ans = Array.from({ length: col }, () => Array(row));
    console.log(ans);
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            ans[j][i] = matrix[i][j];
        }
    }
    return ans
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[1,4,7],[2,5,8],[3,6,9]]
