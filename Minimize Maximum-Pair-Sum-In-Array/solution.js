// 1877. Minimize Maximum Pair Sum in Array

// Problem statement:

// The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.
/*
For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

Each element of nums is in exactly one pair, and
The maximum pair sum is minimized.
Return the minimized maximum pair sum after optimally pairing up the elements.
*/

// Understand the problem first:

// hme simply pair dekhne hy aur aese optimal pairing krni hy k maximum pair sum minimize ho jaye. hum log is me two pointer aur sorting ke use kr ke asani se solution nikal skte hy. 

// Approach and Solution:

// hum sb se pehle input array ko sort kr denge. phir hum left pointer ko start se aur right pointer ko end se initialize krenge. hum dono pointers ko move krenge towards each other, har step pe hum left aur right pointer ke elements ka sum nikalenge aur us sum ko check krenge k kya wo ab tk ka maximum sum se bada hy. agar bada hy to usko update kr denge. is tarah hum array ke smallest aur largest elements ko pair krke maximum pair sum ko minimize kr skte hy.

var minPairSum = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let minimizedSum = -Infinity;
    
    nums.sort((a, b) => a - b);
    while (left < right){
        let sum = nums[left] + nums[right];
        if(sum > minimizedSum){
            minimizedSum = sum;
        }
        left++;
        right--;
    };
    return minimizedSum;
};

console.log([3,5,2,3]); // 7
