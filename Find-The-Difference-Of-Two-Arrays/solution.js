// 2215. Find the Difference of Two Arrays

// Problem statment

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Understand the problem first

// hmare pas do arrays hy nums1 aur nums2 ke name se. Hum ne un dono ka difference nikal ke 2-d array return krna hy

// Solution

// set data structure ka use kr ke pehle nums1 ke unique chars aleda kr le ge then isi trah num2 ke. Then in unique sets ko original se match kre ge, Aur simply return kr de ge result. is me has ka methos ye chk kra raha hy ke wo num us me hy ya nahi means boolean return kre ga.

var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [
    [...set1].filter((num) => !set2.has(num)), // nums1 - nums2
    [...set2].filter((num) => !set1.has(num)), // nums2 - nums1
  ];

  return result;
};

console.log(findDifference([1, 2, 3], [2, 4, 6])); //  [[ 1,3 ] , [ 4, 6]]
