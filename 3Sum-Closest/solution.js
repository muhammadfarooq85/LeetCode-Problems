// 16. 3Sum Closest

// Problem statement:

// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Understand the problem:

// hme teen aese integers ka sum nikalna hai jo target ke sabse kareeb ho.

// Approach and Solution:

// sb se pehle array ko sort karenge. Phir ek loop chalakar har element ke liye do pointer technique use karenge. Ek pointer start se aur dusra end se. Har iteration mein current sum calculate karenge aur target se compare karenge. Agar current sum target se zyada hai to end pointer ko left shift karenge, aur agar kam hai to start pointer ko right shift karenge. Agar current sum target ke barabar ho jata hai to wahi sum return kar denge kyunki wahi closest hoga.

var threeSumClosest = function (nums, target) {
  let n = nums.length;
  let closestSum = 100000;
  nums.sort((a, b) => a - b);
  for (let k = 0; k <= n - 3; k++) {
    let i = k + 1;
    let j = n - 1;
    while (i < j) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
      if (sum < target) {
        i++;
      } else {
        j--;
      }
    }
  }
  return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
