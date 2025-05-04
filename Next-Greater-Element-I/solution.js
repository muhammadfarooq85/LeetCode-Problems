// 496. Next Greater Element I

// Problem statement

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array. You are given two distinct 0 - indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2. For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.If there is no next greater element, then the answer for this query is - 1. Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Understand the problem statement

// hme do array of int nums1 and nums2 dia gye hy. jaha per nums1 nums2 ka subset hy. hum ne nums1 ke jitne bi number hy un ko tlash krna hy nums me aur un ke right side pe foran bad jo bada element ata hy usko return krna hy agr koi bda na mile tu -1 dalna hy aur result array retrun krna hy

// Solution

// simply hum log stack ko use kre ge aur next greater element ka record rakh le ge aur then jin ka find krna hy un ka ck kr le ge.

var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let nextGreaterMap = {};
    for (let i = nums2.length - 1; i >= 0; i--) {
        let num = nums2[i];
        while (stack.length && stack[stack.length - 1] <= num) {
            stack.pop();
        }
        nextGreaterMap[num] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(num);
    }
    return nums1.map(num => nextGreaterMap[num]);
};

console.log(nextGreaterElement([4, 2, 1], [1, 3, 2, 4])); // [ -1, 4, 3 ] 

