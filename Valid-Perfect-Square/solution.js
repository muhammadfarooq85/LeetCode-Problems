// 367. Valid Perfect Square

// Problem statement:

// Given a positive integer num, write a function which returns True if num is a perfect square else False. Do not use any built-in library function such as sqrt.

// Understand the problem first:

// hme aik positive integer di gai hai aur hme check karna hai ki wo perfect square hai ya nahi. Perfect square wo number hota hai jo kisi integer ke square se banta hai. For example, 1, 4, 9, 16, 25, etc. are perfect squares.

// Approach and Solution:

// aik tu hum brute force approach le sakte hain jisme hum 1 se lekar num tak ke sare integers ke squares nikal ke check karenge ki kya wo num ke barabar hai. Lekin ye approach inefficient hogi, especially jab num bada hoga. Is ke ilawa hum binary search approach use kar sakte hain jisme hum 1 se lekar num ke beech mein mid nikal ke uska square check karenge. Agar mid ka square num ke barabar hai to hum true return karenge. Agar mid ka square num se chhota hai to hum search space ko mid+1 se lekar high tak reduce karenge aur agar mid ka square num se bada hai to hum search space ko low se lekar mid-1 tak reduce karenge. Is process ko tab tak repeat karenge jab tak low high se bada na ho jaye.

var isPerfectSquare = function (num) {
  if (num < 1) return false;

  let low = 1;
  let high = num;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midSquared = mid * mid;

    if (midSquared === num) {
      return true;
    } else if (midSquared < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
