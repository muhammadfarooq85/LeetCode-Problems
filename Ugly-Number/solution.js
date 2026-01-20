// 263. Ugly Number

// Problem statement:

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer n, return true if n is an ugly number.

// Understand the problem first:

// hme aik number diya hai, hme check krna hai ki wo number sirf 2, 3, aur 5 ke prime factors se bana hai ya nahi. Agar wo number sirf in prime factors se bana hai to wo ugly number hoga, warna nahi.

// Approach and Solution:

// 1. Agar n less than or equal to 0 hai, to return false, kyunki ugly numbers positive integers hote hain.
// 2. Jab tak n divisible hai 2 se, n ko 2 se divide karte raho.
// 3. Jab tak n divisible hai 3 se, n ko 3 se divide karte raho.
// 4. Jab tak n divisible hai 5 se, n ko 5 se divide karte raho.
// 5. Agar final value of n 1 ho jati hai, to return true, warna return false.

var isUgly = function (n) {
    while (n > 1) {
        if (n % 2 === 0) {
            n = Math.floor(n / 2);
        } else if (n % 3 === 0) {
            n = Math.floor(n / 3);
        } else if (n % 5 === 0) {
            n = Math.floor(n / 5);
        } else {
            return false;
        }
    };
    
    return n === 1;
};

console.log(isUgly(6));  // true
