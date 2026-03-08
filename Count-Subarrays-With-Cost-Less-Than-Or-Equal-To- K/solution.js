// 3835. Count Subarrays With Cost Less Than or Equal to K

// Problem statement:

/*
You are given an integer array nums, and an integer k. For any subarray nums[l..r], define its cost as:

cost = (max(nums[l..r]) - min(nums[l..r])) * (r - l + 1). Return an integer denoting the number of subarrays of nums whose cost is less than or equal to k.
*/

// Understand the problem first:

// hme aik int of array nums di hui hy aur ek int k di hui hy. Hme subarrays ki cost calculate krni hy aur count krna hy ki kitne subarrays ki cost k se kam ya barabar hy. Cost calculate krne ke liye hme max aur min find krna hy subarray ke elements ka aur uske baad unka difference multiply krna hy subarray ke length se.

// Approach and Solution:

// hum isko sliding window technique se solve kr skte hain. hum do pointers l aur r use krenge jo subarray ke start aur end ko represent krte hain. hum max aur min ko maintain krne ke liye deque ka use krenge. jab bhi hum r pointer ko aage badhate hain, hum max aur min ko update krte hain. agar cost k se zyada ho jati hai, to hum l pointer ko aage badhate hain jab tak cost k se kam ya barabar na ho jaye. har step par, hum count karte hain ki kitne subarrays valid hain.

// Hum isko simply brute force se bi kr skte hy.

let countSubarrays = function (nums, k) {
  // let result = 0;

  // let findMax = function (start, end) {
  //     let max = nums[start];
  //     while (start <= end) {
  //         max = Math.max(nums[start], max);
  //         start++;
  //     }
  //     return max;
  // }

  // let findMin = function (start, end) {
  //     let min = nums[start];
  //     while (start <= end) {
  //         min = Math.min(nums[start], min);
  //         start++;
  //     }
  //     return min;
  // }

  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i; j < nums.length; j++) {
  //         let max = findMax(i, j);
  //         let min = findMin(i, j);
  //         if ((max - min) * (Math.abs(i - j) + 1) <= k) {
  //             result++;
  //         }
  //     }
  // }

  // return result;

  let n = nums.length;
  let count = 0;
  let maxDeque = [];
  let minDeque = [];
  let l = 0;

  for (let r = 0; r < n; r++) {
    while (
      maxDeque.length > 0 &&
      nums[maxDeque[maxDeque.length - 1]] <= nums[r]
    ) {
      maxDeque.pop();
    }
    maxDeque.push(r);

    while (
      minDeque.length > 0 &&
      nums[minDeque[minDeque.length - 1]] >= nums[r]
    ) {
      minDeque.pop();
    }
    minDeque.push(r);

    while ((nums[maxDeque[0]] - nums[minDeque[0]]) * (r - l + 1) > k) {
      if (maxDeque[0] === l) {
        maxDeque.shift();
      }
      if (minDeque[0] === l) {
        minDeque.shift();
      }
      l++;
    }

    count += r - l + 1;
  }

  return count;
};

console.log(countSubarrays([1, 3, 2], 4)); // Output: 5
