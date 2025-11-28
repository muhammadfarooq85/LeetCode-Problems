// 605. Can Place Flowers

// Problem statement:

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Understand the problem first:

// hme aik int of array flowrbed dia hua hy jis me 0 empty plot hy or 1 planted plot hy. or aik int n dia hua hy jiska matlab hy k hme n new flowers plant krne hy. hme check krna hy k kya hm n new flowers ko flowerbed me is trha se plant kr skty hy k adjacent plots me flowers na hon

// Approach and Solution:

// hum simply pehle ye check kr le ge ke agr n hi zero ya flowerbed me zero se kam hy to hm true return kr den gy. phir hum flowerbed ke har plot ko iterate kren gy or check kren gy ke agr current plot 0 hy or uske left or right adjacent plots bhi 0 hy to hm current plot me flower plant kr den gy (1 kr den gy) or n ko decrease kr den gy by 1. agar loop k end me n zero ya usse kam ho jata hy to hm true return kr den gy warna false.

var canPlaceFlowers = function (flowerbed, n) {
  if (n <= 0) return true; // If no flowers need to be planted, return true

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const isLeftEmpty = i === 0 || flowerbed[i - 1] === 0;
      const isRightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (isLeftEmpty && isRightEmpty) {
        flowerbed[i] = 1;
        n--;

        if (n === 0) return true;
      }
    }
  }

  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
