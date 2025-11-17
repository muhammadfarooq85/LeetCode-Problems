// c

// Problem statement:

// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false. A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

// Understand the problem first:

// hme aik matrix di gai hai aur hme check krna hai ki kya wo Toeplitz matrix hai ya nhi. Toeplitz matrix wo hoti hai jisme har diagonal (top-left se bottom-right) ke sare elements same hote hain.

// Approach and Solution:

// sb se pehle hme matrix ke dimensions lena hai, fir hum matrix ke har element ko check krenge (except first row and first column) ki kya wo apne top-left diagonal element ke barabar hai ya nhi. Agar koi bhi element apne diagonal element se different mila to hum false return kr denge. Agar sare elements check krne ke baad koi difference nhi mila to hum true return kr denge.

var isToeplitzMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }
    
    return true;
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])); // true
