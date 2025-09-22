// 88. Merge Sorted Array

// Problem statement

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Understand the problem first

// hmare pas two array of int nums hy hum ne un ko merge krna hy. baqi ap explanation padh le it is very simple

// Solution

// hum log two pointers le ge aik pehle array ke ends se aur dosra pointer hum dosre array ke end se start kr skte hy.
// lekin yaha hum aik aur pointer le ge jo ke total space store rakhe ga. end se merge krna start kre ge. aur agr kisi array me koi bach jaye ha tu hum log us ke elements ko k wale pointer ke index pe dal de ge.

var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // last elem from nums1
  let j = n - 1; // last elem from nums2
  let k = m + n - 1; // total space nums1 + nums2

  // Merge from the end
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], [2, 5, 6]));
