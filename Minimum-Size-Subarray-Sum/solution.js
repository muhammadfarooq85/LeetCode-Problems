// 209. Minimum Size Subarray Sum

// Problem statement:

// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Understand the problem first:

// hme aik non negative integer array di hui hai aur ek target value di hui hai. Hme ye find karna hai ki subarray ka minimum length kya ho sakta hai jiska sum target se bada ya uske barabar ho. Agar aisa koi subarray nahi milta to hme 0 return karna hai.

// Approach and Solution:

// hum is me two pointers aur sliding window technique ka use karenge. hum ek pointer start rakhenge jo subarray ke starting index ko point karega aur ek pointer end jo subarray ke ending index ko point karega. hum end pointer ko aage badhate jayenge aur sum calculate karte jayenge jab tak sum target se bada ya uske barabar nahi ho jata. jab sum target se bada ya uske barabar ho jata hai to hum start pointer ko aage badhate jayenge aur minimum length ko update karte jayenge. is process ko tab tak repeat karenge jab tak end pointer array ke end tak nahi pahuch jata.

var minSubArrayLen = function (target, nums) {
  let n = nums.length;
  let minLength = Infinity; // Initialize minLength to a large value
  let start = 0; // Start pointer
  let sum = 0; // Current sum of the window

  for (let end = 0; end < n; end++) {
    sum += nums[end]; // Expand the window by adding the current element
    // Shrink the window as small as possible while the sum is greater than or equal to target
    while (sum >= target) {
      minLength = Math.min(minLength, end - start + 1); // Update minLength
      sum -= nums[start]; // Remove the starting element from the sum
      start++; // Move the start pointer to the right
    }
  }

  return minLength === Infinity ? 0 : minLength; // If minLength was not updated, return 0
};
console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // Output: 2
