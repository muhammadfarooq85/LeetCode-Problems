// 162. Find Peak Element

// Problem statemnt

// A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. // You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array. // You must write an algorithm that runs in O(log n) time.

// Understand the problem first

// hme aik array of int nums dia gia hy hum ne peak element find kr ke us ka index return krna hy. Peak element wo hy jo ke apne left aur right se greater ho. Agr left bada hy lekin right pe kuch bi nahi then hum ne us akhri element ko return krna hy

var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
      // console.log(left);
    }
  }
  // console.log(left)
  return left;
};

console.log(findPeakElement([1, 2, 3, 1])); // 2 ---> index ---> 3
