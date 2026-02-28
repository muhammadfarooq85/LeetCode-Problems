// 3834. Merge Adjacent Equal Elements

// Problem statement:

// You are given a 0-indexed integer array nums. You must repeatedly apply the following merge operation until no more changes can be made: If any two adjacent elements are equal, choose the leftmost such adjacent pair in the current array and replace them with a single element equal to their sum. After each merge operation, the array size decreases by 1. Repeat the process on the updated array until no more changes can be made.Return the final array after all possible merge operations.

// Understand the problem first:

// hme aik array diya hai, jisme adjacent elements ko merge karna hai jab wo equal ho. Merge karne ke baad, array ka size kam ho jayega. Hume final array return karna hai jab aur merge possible na ho.

// Approach and Solution:

// hum isko brute force approach se solve kar sakte hain, jisme hum array ko iterate karenge aur adjacent elements ko check karenge. Agar adjacent elements equal hain, to unko merge karenge aur array ko update karenge. Yeh process tab tak repeat karenge jab tak aur merge possible na ho. lekin hum log stack ka use kar sakte hain is problem ko efficiently solve karne ke liye. Stack ka use karke hum adjacent elements ko easily check kar sakte hain aur merge kar sakte hain.

var mergeAdjacent = function (nums) {
    // let i = 0;

    // while (i < nums.length - 1) {
    //     if (nums[i] == nums[i + 1]) {
    //         nums[i] = nums[i] + nums[i + 1];
    //         nums.splice(i + 1, 1);
    //         i = 0;
    //     } else {
    //         i++;
    //     }
    // }

    // return nums;

    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        
        // Keep merging while the top of stack equals current value
        while (stack.length && stack[stack.length - 1] === current) {
            stack.pop(); // Remove the matching element
            current = current * 2; // Double the value
        }
        
        stack.push(current);
    }

    return stack;
};

console.log(mergeAdjacent([3,1,1,2])); // Output: [3,4]