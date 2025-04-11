// 334. Increasing Triplet Subsequence

// Problem statement

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Understand the problem first

// hme aik array of ints nums dia gia hy. humne ye dekhna hy ke agr tripple indices like i< j < k krte hy tu true warna false return krwana hy.

// Solution

// Sb se pehle jo approach zehn me wo nested loops ka use kr ke kr skte hy. Lekin dosri better approach bi hy. Wo ye ke hum teen varable le ge jo ke first, second aur third ke name se ho ge. Hum first me pehle badi value rakhe ge then chk kre ge ke agr agli value first se badi hy tu first me assign kr do waran hy second me warna third me aur then ye pta chl jaye ga ke hmare pas aese teen indices value hy jo is crieteria ko met krte hy.

let increasingTriplet = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       for (let k = j + 1; k < nums.length; k++) {
  //         if (nums[i] < nums[j] && nums[j] < nums[k]) {
  //           return true;
  //         }
  //       }
  //     }
  //   }

  //   return false;

  let firstNum = Number.MAX_VALUE;
  let secondNum = Number.MAX_VALUE;
  let thirdNum = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    let incomingNum = nums[i];

    if (firstNum >= incomingNum) {
      firstNum = incomingNum;
    } else if (secondNum >= incomingNum) {
      secondNum = incomingNum;
    } else {
      thirdNum = incomingNum;
      return true;
    }
  }
  return false;
};
console.log(increasingTriplet([1, 2, 3, 4, 5]));
