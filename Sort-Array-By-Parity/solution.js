// 905. Sort Array By Parity

// Problem statement

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition.

// Understand the problem first...

// hme aik array of integer dia gia hy jis ka name nums hy. Us array me even and odd nums ho ge. Hum ne all even ints ko array ke start me dalna hy. Aur us even ka order matter nahi krta blke even, odd ka order satisfy krta hy.

// Solution

// simple sa solution ye hy ke loop lga ke hr number ko nikaal le ge aur then ye chk kre ge ke ke agr wo number 2 pe divide hoe ke reminder 0 ata hy tu mtlb wo number even hy warna odd hy.

let sortArrayByParity = (nums) => {
  let evenNums = [];
  let oddNums = [];
  for (let num of nums) {
    if (num % 2 === 0) {
      evenNums.push(num);
    } else {
      oddNums.push(num);
    }
  }

  return [...evenNums, ...oddNums];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
