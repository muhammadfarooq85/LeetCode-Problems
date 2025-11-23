// 962. Maximum Width Ramp

// Problem statement:

// A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i. Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

// Understand the problem first:

// hme aik int of array nums di gai hai. Hme us array me se aise (i, j) pairs dhundhne hain jaha i < j aur nums[i] <= nums[j]. Fir hme un pairs ka maximum width (j - i) return karna hai. Agar koi aisa pair nahi milta to 0 return karna hai.

// Approach and Solution:

// hum is me nested means brute force bi lga skte hy lekin hum is thodi better approach lgaenge. Hum aik aesa array bnae ge jis me hr index ke right ka maximum value store kr lenge. then two pointer le ge then aik is array per aur doosra original array per. Fir hum dono pointer ko compare krenge aur agar condition satisfy hoti hai to width calculate krenge aur max width update krenge. Agar condition satisfy nahi hoti to left pointer ko aage badha denge.

var maxWidthRamp = function (nums) {
  const n = nums.length;
  const rightMax = new Array(n);
  rightMax[n - 1] = nums[n - 1];

  // Fill the rightMax array
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
  }

  let maxWidth = 0;
  let left = 0;
  let right = 0;

  // Use two pointers to find the maximum width ramp
  while (left < n && right < n) {
    if (nums[left] <= rightMax[right]) {
      maxWidth = Math.max(maxWidth, right - left);
      right++;
    } else {
      left++;
    }
  }

  return maxWidth;
};

console.log(maxWidthRamp([6,0,8,2,1,5])); // Output: 4
