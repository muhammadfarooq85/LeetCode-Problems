// 15. 3Sum

// Problem statement

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.

// Understand the problem first

// hme array of int nums dia gia hy hum ne triplet find karne hain jinka sum 0 ho aur triplet unique hone chahiye 

// Approach and Solution

// sb se pehle edge case dekhe ge ke agr nums array ki length 3 se kam hai to hum empty array return kar denge kyunki triplet possible nahi hai otherewise hum array ko sort karenge taki hum two-pointer technique use kar sakein fir us sorted array per hum loop chalaye ge jisme har element ke liye hum twoSum function call karenge jo ki remaining elements me se do aise elements find karega jinka sum current element ke negative ke barabar ho taki total sum 0 ho jaye. Hum duplicates ko skip karenge taki unique triplets hi result me aayein.

var threeSum = function(nums) {
    // Handle base case: need at least 3 elements
    if (nums.length < 3) {
        return [];
    }
    
    const result = [];
    // Sort the array for two-pointer technique
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first element
        if (i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        // Call twoSum for the remaining subarray
        twoSum(nums, i + 1, result, -nums[i]);
    }
    
    return result;
};

// Two-pointer helper function
var twoSum = function(nums, k, result, target) {
    let i = k;
    let j = nums.length - 1;
    
    while (i < j) {
        const sum = nums[i] + nums[j];
        
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        } else {
            // Found a valid triplet
            result.push([-target, nums[i], nums[j]]);
            
            // Skip duplicates for the second element
            while (i < j && nums[i] === nums[i + 1]) {
                i++;
            }
            // Skip duplicates for the third element
            while (i < j && nums[j] === nums[j - 1]) {
                j--;
            }
            
            // Move both pointers after finding a valid pair
            i++;
            j--;
        }
    }
};