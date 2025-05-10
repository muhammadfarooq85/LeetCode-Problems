// 287. Find the Duplicate Number

// Problem statement

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and using only constant extra space.

// Understand the problem first

// hme aik array of nums dia gia hy jis me numbers hy 1 se le kr n tk. Humne sirf duplicate number find kr ke return krna hy. yaad rahe ke duplicate sirf aik hi  ho ga.

// Solution

// hashmap ka use kr ke hum log is ko dekh le ge konsa duplicate hy.


var findDuplicate = function (nums) {
    const hashMap = {};
    for (let num = 0; num < nums.length; num++) {
        if (hashMap[nums[num]]) {
            hashMap[nums[num]] += 1;
        } else {
            hashMap[nums[num]] = 1;
        };
    };
    const keys = Object.keys(hashMap);
    for (let key of keys) {
        if (hashMap[key] === 2) {
            return Number(key);
        };
    };
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
