// 231. Power of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2x.

// Understand the prblem first...

// hme aik int dia gia hy hum ne ye chk krna hy ke agr wo int 2 ki power hy tu true return krna hy nahi tu false return krna hy.

// Solution

let isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    while (n % 2 === 0) {
      n = n / 2;
    }

    if (n === 1) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isPowerOfTwo(1)); // true
