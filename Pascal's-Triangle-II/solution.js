// 119. Pascal's Triangle II

// Problem statement

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// Understand the problem first

// Hume ek integer rowIndex diya gaya hai. Pascal’s Triangle me har row banti hai pichli row ke numbers ko add karke.Matlab agar input 4 ho → output [1, 4, 6, 4, 1].

// Solution

// Hum pehle element [1] se start karte hain. Phir formula use karke agla element calculate karte hain. Ye process repeat karte hain jab tak poori row ban jaye.

var getRow = function(rowIndex) {
    let row = [1];
    for (let k = 1; k <= rowIndex; k++) {
        let val = (row[k - 1] * (rowIndex - k + 1)) / k;
        row.push(val);
    }

    return row;
};

console.log(getRow(5)); // [1, 5, 10, 10, 5, 1]
