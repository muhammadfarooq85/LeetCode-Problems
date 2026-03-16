// 6. Zigzag Conversion

// Problem statement:

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// Understand the problem first:

// hme aik string diya hoga aur ek number of rows diya hoga. Hume string ko zigzag pattern me convert karna hai aur fir us zigzag pattern ko read karna hai row by row.

// Approach and Solution:

// hum aik 2d array banayenge jisme hum zigzag pattern ko store karenge. Fir hum us 2d array ko read karenge row by row aur final string banayenge. hum do loop use krege jis me aik down aur dosra diagonal hoga. down loop me hum current row ko increment karenge aur diagonal loop me hum current row ko decrement karenge aur current column ko increment karenge. jab hum last row tak pahuch jate hai to hum down loop se diagonal loop me switch karenge aur jab hum first row tak pahuch jate hai to hum diagonal loop se down loop me switch karenge.

var convert = function(s, numRows) {
    if (numRows === 1) return s;

    let rows = new Array(numRows).fill("").map(() => "");
    let index = 0;
    let n = s.length;

    while (index < n) {

        // Go Down
        for (let i = 0; i < numRows && index < n; i++) {
            rows[i] += s[index++];
        }

        // Go Up (diagonal)
        for (let i = numRows - 2; i > 0 && index < n; i--) {
            rows[i] += s[index++];
        }
    }

    return rows.join("");
};

console.log(convert("PAYPALISHIRING")); // Output: "PAHNAPLSIIGYIR"
