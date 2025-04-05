// 989. Add To Array form of Integers

// Problem Statement

// The array-form of an integer num is an array representing its digits in left to right order.

// Understand the problem first

// hamre pas aik array hy aur aik number hum ne un dono ko sum kr ke un ko array ki form me return krna hy

// solution

// hum is pointer ka use kre ge aur last digit aur remove digit ka concept use kre ge.

let addToArrayForm = (num, k) => {
  let lengthOfNum = num.length - 1;
  let carry = 0;
  let answer = [];
  while (lengthOfNum >= 0 || k > 0 || carry > 0) {
    let valueOfNum = 0;
    if (lengthOfNum >= 0) {
      valueOfNum = num[lengthOfNum];
    }

    let lastDigitOfK = k % 10;
    let sumOfNumAndLastDigitOfK = lastDigitOfK + valueOfNum + carry;
    let lastDigitOfSum = sumOfNumAndLastDigitOfK % 10;
    carry = Math.floor(sumOfNumAndLastDigitOfK / 10);
    answer.unshift(lastDigitOfSum);
    lengthOfNum--;
    k = Math.floor(k / 10);
  }

  return answer;
};

console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1, 2, 3, 4]
console.log(addToArrayForm([1, 2], 34)); // [4, 6]
