// 2529. Maximum Count of Positive Integer and Negative Integer

// Problem statement

// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers. In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg. Note that 0 is neither positive nor negative.

// Understand the problem first

// Hme aik array of int nums dia gia hy jis me positive aur negative numbers dia gye hy. Hum ne ye return krna hy ke positive ziada hy ya nagative. Aur 0 zero na negative hy na positive. 

// Solution

// simply pehle ye chk kr le ge konse negative hy negative wahi hy jo 0 se chotte hy. then jo zero se bade hy mtlb wo positive hy. then maximum find kr le ge.

var maximumCount = function (nums) {
    let negativeCount = 0;
    let positiveCount = 0;
    for (let num of nums) {
        if (num < 0) {
            negativeCount += 1;
        } else if (num > 0) {
            positiveCount += 1;
        }
    }

    return Math.max(negativeCount, positiveCount)
};
console.log(maximumCount([-1, -2, - 3, 0, 2, 1, 2, 1])); // 4
console.log(maximumCount([-1, -2, - 3, 0, 2, 1, 2,])); // 3
