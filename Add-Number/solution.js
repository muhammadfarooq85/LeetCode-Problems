// 66. Add-Number

// Problem Statement

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

// Understand the problem first...

// hme aik array of integer dia jaye ga hum ne su ko aik number se increment krna hy. aur array hi ki form me retiurn krna hy.

// Solution

let addOne = (ints) => {
  for (let i = ints.length - 1; i >= 0; i--) {
    if (ints[i] < 9) {
      ints[i]++; // If the digit is less than 9, simply add 1
      return ints; // Return the updated digits
    }
    console.log("Ye chla...");
    ints[i] = 0; // If the digit is 9, set it to 0 and carry over the 1
    console.log(ints);
  }

  // If all digits were 9, we need to add an extra leading 1 at the start
  ints.unshift(1);
  return ints;
};

const arrayOfInts = [9];
console.log(addOne(arrayOfInts));
