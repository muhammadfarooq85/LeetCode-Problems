// 27. Remove Element

// Problem statement

// Given an integer array `nums` and an integer `val`, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// understand the problem first...

// hame do array of ints dia gae hy aik nums ke name se aur doosra val ke name se hum ne nums ke array me se val ke int ko remove krna hy aur baqi jitni values bachti hy un ki length return krni hy

// Solution...

// Iske liye hum log two pointers ki technique ko use krte hoe question ko slove kr ge

let removeElements = (nums, val) => {
  // if (nums.length === 0) {
  //   return 0;
  // }
  // let remainingNums = [];

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== val) {
  //     remainingNums.push(nums[i]);
  //   }
  // }

  // return remainingNums;

  if (nums.length === 0) {
    return 0;
  }
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[l] = nums[i];
      l += 1;
    }
  }
  return l;
};

console.log(removeElements([3, 2, 2, 3], 3)); // [ 2, 2 ]
console.log(removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [ 0, 1, 3, 0, 4 ]
