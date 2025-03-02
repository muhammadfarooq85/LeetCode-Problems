// 1295. Find Numbers with Even Number of Digits

// Problem statement

// Given an array nums of integers, return how many of them contain an even number of digits.

// Understand the problem first...

// hme aik array dia gia hy nums ka jis me integers hy hum ne even number of digits kitne hy wo return krne hy. Hum ne integers ko nahi dekhna blke us int ke kitne digits hy un ko dekhna hy.

// Solution ye ke loop lgae ge then usko string me convert kr ke us int ki length ko chk kre ge ke wo even hy ya odd.

let findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    let strNum = num.toString();
    if (strNum.length % 2 == 0) {
      count += 1;
    }
  }

  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
