// 1329. Sort the Matrix Diagonally

// Pronblem statement:

// Given a m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

// Undersand the problem first:

// hme aik matrix di gai hai hme us matrix ki har diagonal ko sort krna hai ascending order meaik

// Approach and Solution

// aik map bnae ge jisme key hogi diagonal ki starting point aur value hogi us diagonal ke elements ki list. phir har diagonal ki list ko sort krke wapis map meaik store krdenge finally matrix ko traverse krke sorted values ko wapis matrix meaik daldenge

var diagonalSort = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    
    const mp = new Map();
    
    // Store diagonal elements
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const key = i - j;
            if (!mp.has(key)) {
                mp.set(key, []);
            }
            mp.get(key).push(mat[i][j]);
        }
    }
    
    // Sort them
    for (const [key, arr] of mp) {
        arr.sort((a, b) => a - b);
    }
    
    // Now, put them back in sorted fashion
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const key = i - j;
            const arr = mp.get(key);
            mat[i][j] = arr.pop();
        }
    }
    
    return mat;
};