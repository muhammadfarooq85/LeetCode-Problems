// 55. Jump Game

// Problem statement:

//  You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.

// Understand the problem first:

// hme aik array di huai hy hume ne ye dekhna hy ke hr index pe jo value hy kia use se hum log end array tk ponch skte hy ya nahi chahe wo hum aik step le ya do ya teen. Age ponch jaye tu true warna false.

// Approach and Solution:

// hum log simple greedy approach se bi kr skte hy aur dp se bi

var canJump = function (nums) {
  const n = nums.length;
  const memo = new Array(n).fill(-1);

  function canReachFrom(currentIndex) {
    if (currentIndex >= n - 1) {
      return true;
    }

    if (memo[currentIndex] !== -1) {
      return memo[currentIndex] === 1;
    }

    const maxSteps = nums[currentIndex];

    for (let step = 1; step <= maxSteps; step++) {
      const nextIndex = currentIndex + step;

      if (canReachFrom(nextIndex)) {
        memo[currentIndex] = 1;
        return true;
      }
    }

    memo[currentIndex] = 0;
    return false;
  }

  return canReachFrom(0);
};

console.log([2, 3, 1, 1, 4]); // true
