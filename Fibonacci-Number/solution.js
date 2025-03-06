// 509. Fibonacci Number

// Problem statement

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Understand the problem first...

// hum ne fibonacci term find krni hy. Fibonaccit term wo term hy jis me hr number apne sepehle number ka sum hota hy aur fibonacci series 0 aur 1 se start hoti hy.

// Solution ye hy ke pehle ino ne kaha hoa hy ke agr wo number or integere 0 hy tu 0 agr 1 hy tu 1 ae ga.

let fib = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n > 1) {
    console.log("end wali cond chli...");

    let firstTerm = 0;
    let secondTerm = 1;
    for (let i = 1; i <= n; i++) {
      let thirdTerm = firstTerm + secondTerm;
      // 1 => 0 + 1 => 1
      // 2 => 1 + 1 => 2
      // 3 => 2 + 1 => 3

      firstTerm = secondTerm;
      secondTerm = thirdTerm;
    }
    return firstTerm;
  }
};

console.log(fib(3));
