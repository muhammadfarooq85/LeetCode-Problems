// 26. Remove Duplicates from Sorted Array

// Problem Statement

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Understand the problem first...

// acha mje jitni smjh ai hy uske mutabiq hum ne unique nums ko nikal kr ke us ki length return kni hy ke kitne aese nums the jo unique hy

// Solution

// iske liye hum two pointers technique istemal kre ge. jis me dono pointers left se start ho ge.

let removeDuplicatesFromSortedArray = function (nums) {
  if (nums.length === 0) return 0;

  let l = 0; // initilaizing the left pointer from zero
  for (let r = 1; r < nums.length; r++) {
    // checking whether left pointer nums is equal to right pointer nums or not if true then we are counting that we found a unique number...
    if (nums[r] !== nums[l]) {
      l += 1;
      nums[l] = nums[r];
    }
  }

  return l + 1;
};

// acha aik baat badi qabile ghor hy ke agr tmam values hi same hy tu answer zero ana chahie lekin one kyu a raha hy kyu ke wo element tu itself unique hy na pure array me. That's it.
console.log(removeDuplicatesFromSortedArray([2, 2, 2])); // 1
console.log(removeDuplicatesFromSortedArray([1, 2, 2])); // 2
console.log(removeDuplicatesFromSortedArray([])); // 0
