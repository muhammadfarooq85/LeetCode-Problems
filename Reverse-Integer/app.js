// Problem statement

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Understand the Problem first...

// hume aik integer dia gia hy hum ne usko reverse kr ke hme return krna hy. Agr reverse hone ke baad wo 32 bit se uper jaye ya neeche jaye tu hme 0 return krna hy.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Solution is here. I think is me solution discuss krne ki zaroorat nahi.

var num = 120;
var reverse = function (x) {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  const numToStr = x.toString();
  let result = null;
  if (numToStr.startsWith("-")) {
    const excludeHyphenFromX = numToStr.split("").slice(1);
    const reversedXInStr = excludeHyphenFromX.reverse().join("");
    result = "-" + reversedXInStr;
  } else {
    const reversedXInStr = numToStr.split("").reverse().join("");
    result = reversedXInStr;
  }
  const reversedInt = parseInt(result);

  if (reversedInt < INT_MIN || reversedInt > INT_MAX) {
    return 0;
  }

  return reversedInt;
};

console.log(reverse(num));
