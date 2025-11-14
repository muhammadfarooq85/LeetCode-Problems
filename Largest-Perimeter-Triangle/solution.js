// 976. Largest Perimeter Triangle

// Problem statement:

// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// Understand the problem first:

// hme aik array of int di gayi hy jisme se hme 3 aise elements find krne hy jinka sum sbse zyada ho aur jo triangle bna ske

// Approach and Solution:

// hme sb se pehl aik edge case ko consider kre ge then usko sort kre ga ta ke hmesha sb se ziada edge length mil ske. phir hum array ke end se 3 elements ko check kre ge agr ye triangle bna ske to unka sum return kr de ga. agr nhi bna ske to next 3 elements ko check kre ga. agr koi b 3 elements triangle nhi bna ske to 0 return kr de ga.

var largestPerimeter = function (nums) {
    if (nums.length < 3) {
        return 0;
    }
    nums.sort((a,b)=> a - b); // asc
    for (let i = nums.length - 3; i >=0; i--){
        console.log(i);
        if (nums[i] + nums[i + 1] > nums[i + 2]){
            return nums[i] + nums[i + 1] + nums[i + 2];
        };
    };

    return 0;
};

console.log(largestPerimeter([2,1,2])); // 5
