// 645. Set Mismatch

// Problem statement:

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number. You are given an integer array nums representing the data status of this set after the error. Find the number that occurs twice and the number that is missing and return them in the form of an array.


// Understanding the Problem:

// hme aik array of int di gayi hy jisme 1 to n tak k numbers hone chahiyen, lekin aik number duplicate ho gaya hy aur aik number missing hy. Hme duplicate aur missing number find karna hy.

// Approach and Solution:

// hum array ko traverse karenge aur har number k corresponding index ko negative mark karenge. Agar koi number already negative hy to iska matlab wo duplicate hy. Phir hum dubara array ko traverse karenge taake wo index find kar sakein jo positive hy, jiska matlab wo missing number hy. yaha sara ka sara chkr absolute value k sath ho raha hy taake hum negative marking k bawajood original number ko access kar saken.

var findErrorNums = function(nums) {
    const n = nums.length;
    
    let dup = -1;
    let missing = -1;
    
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        
        if (nums[num - 1] < 0)
            dup = num;
        else
            nums[num - 1] *= (-1);
    }
    
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            missing = i + 1;
            break;
        }
    }
    
    return [dup, missing];
};

console.log(findErrorNums([1,2,2,4])); // Output: [2,3]
