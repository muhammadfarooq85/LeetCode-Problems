// 59. Spiral Matrix II

// Problem statement

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Understand the problem first 

// hme aik positive int n dia jaye ga hum ne n * n ka mtrix bnana hy spiral order me is trah ke wo 1 se start se ho aut n square tk jaye. 

// Solution

// sb se pehle tu hme aik 2-D array bnana ho ga row and column ke liye. Then pir aik count ka varaible lena ho ga ta ke ye track kia ja ske ke matrix me kaha tk value le jani hy. Aur char variable bnae ge jis me minRow, maxRow, minCol, maxCol ki value ho gi. Ye is liye bna rahe hy ke hum log vlaues ko sahi trah se fill krte jaye. Aur then pit column and row ko shrink kr rahe hy.

let generateMatrix = (n) => {
    let ans = Array.from({ length: n }, () => Array(n));
    let count = 1;
    let minRow = 0;
    let maxRow = n - 1;
    let minCol = 0;
    let maxCol = n - 1;

    while (count <= n * n) {
        for (let c = minCol; c <= maxCol; c++) {
            ans[minRow][c] = count++;
        }
        for (let r = minRow + 1; r <= maxRow; r++) {
            ans[r][maxCol] = count++;
        }
        for (let c = maxCol - 1; c >= minCol; c--) {
            ans[maxRow][c] = count++;
        }
        for (let r = maxRow - 1; r > minRow; r--) {
            ans[r][minCol] = count++;
        }

        minRow++;
        maxRow--;
        minCol++;
        maxCol--;
    }

    return ans;
}

console.log(generateMatrix(3)); // [[ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ]] ===> 1 to 9
console.log(generateMatrix(4)); //  [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]] ===> 1 to 16
