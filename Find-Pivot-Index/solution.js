// 724. Find Pivot Index

// Problem statement

// Given an array of integers nums, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.This also applies to the right edge of the array. Return the leftmost pivot index.If no such index exists, return -1.

// Understand the problem first

// hme aik array of int nums dia gia hy hum ne pivot index find krna hy. pivot index wo index hy jaha per array ki left aur right values ka sum same ho. Agr nahi milta tu -1 return kr dena hy.

// Solution

// hum log two pointers ko use kr ke isko hal krne ki koshih kre ge.

var pivotIndex = function (nums) {
    let rSum = 0;
    for (let num = 0; num < nums.length; num++) {
        rSum += nums[num];
    }
    let lSum = 0;
    for (let num = 0; num < nums.length; num++) {
        rSum -= nums[num];
        if (rSum === lSum) {
            return num;
        };
        lSum += nums[num];
    };

    return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1