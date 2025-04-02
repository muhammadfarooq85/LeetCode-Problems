// 1137. N-th Tribonacci Number

// Problem Statement

// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0. Given n, return the value of Tn.

// Understand the problem first...

// hme aik number dia gia hy hum ne us number tk tribbonacci term find krni hy. Aur uno ne statement me kaha hy ke agr wo num 0 ho tu 0 agr 1 ya do ho tu aik return krna hy.

// Tribbonacci sequence hy kia ke is ke teen terms givern hoti hy hum ne fourth term find krni hoti hy. like

// let fT = 0;
// let sT = 1;
// let tT = 1;
// let fT = fT + sT + tT;

// Solution

// simple ye ke phele edge cases discuss kre ge then us ke baad hum aik se le kr us number tk loops lga ke wo term calculate kr le ge aur return kr de ge.

let tribonacci = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else if (n > 2) {
    let firstTerm = 0;
    let secondTerm = 1;
    let thirdTerm = 1;
    for (let i = 1; i <= n; i++) {
      let fourthTerm = firstTerm + secondTerm + thirdTerm;
      firstTerm = secondTerm;
      secondTerm = thirdTerm;
      thirdTerm = fourthTerm;
    }
    return firstTerm;
  }
};

console.log(tribonacci(4)); // 4
console.log(tribonacci(25)); // 1389537
