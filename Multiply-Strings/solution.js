// 43. Multiply Strings

// Problem statement:

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string. You cannot use any built-in BigInteger library or convert the inputs to integer directly.

// Understand the problem first:

// hme do strings di hue hy do numbers multiply krne hy aur result bhi string me dena hy

// Approach and Solution:

// hum log traditional loop se multiply krne wale approach ko use krenge jisme hum log har digit ko multiply krenge aur carry ko handle krenge

var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    let m = num1.length;
    let n = num2.length;

    let res = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            let mul = (num1[i] - '0') * (num2[j] - '0');

            let p1 = i + j;
            let p2 = i + j + 1;

            let sum = mul + res[p2];

            res[p2] = sum % 10;
            res[p1] += Math.floor(sum / 10);
        }
    }

    let result = res.join('');

    // remove leading zeros
    while (result[0] === '0') {
        result = result.slice(1);
    }

    return result;
};

console.log(multiply("2", "3")); // Output: "6"
