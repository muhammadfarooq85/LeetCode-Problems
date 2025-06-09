// 48. Rotate Image

// Problem statement

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Understand the problem first

// hme aik array dia gia hy hum ne usko clockwise 90deg rotate krna hy. Aur ye hum ne in-place krna hy.

// Solution

// Iske liye hum sb se pehle trnaspose le ge aur pir row ko reverse kr de ge.

let rotateImage = (matrix) => {
    // take transpose of matrix in-place 
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            let k = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = k;
        }
    }
    // helper function for reversing the row
    function reverseRow(row) {
        let start = 0;
        let end = row.length - 1;
        while (start <= end) {
            let k = row[start]
            row[start] = row[end]
            row[end] = k;
            start++;
            end--;
        }
    }
    // extracting the single row and then givng it to the func
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        reverseRow(row);
    }
    return matrix
}

console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7,4,1],[8,5,2],[9,6,3]]
