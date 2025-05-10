// 128. Longest Consecutive Sequence

// Problem statement

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Understand the problem first

// hmare pas aik ints of array nums di gai hy hum ne longest consequtive elemnets sequence return krni hy

// Solution

// simple approach use kre ge ke jb tk hmare pas current number se aik minus kre aur peechla na ho tu mtlb ye ke new sequence warna count kre ge aur jaha sequence cut off ho jaye gi waha dekh le ge ke konsa longest length hy. 

var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let maxLen = 0;
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            };
            maxLen = Math.max(maxLen, currentStreak);
        };
    };
    return maxLen;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
