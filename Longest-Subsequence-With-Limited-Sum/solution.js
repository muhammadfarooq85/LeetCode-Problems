// 2389. Longest Subsequence With Limited Sum

// Problem Statement:

// You are given an integer array nums of length n, and an integer array queries of length m. Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i]. A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

// Understand the problem first:

// hme aik int of array aur aik target sum dia hui hy. hume ne ye dekhna hy k hum array k kitne elements ko add kr skty hain jiska sum target sum sy kam ya barabar ho. 

// Approach and Solution:

// chu ke humne sbse ziada elements ko add krna hy, to sbse pehly hum array ko sort krengy. then hum simply brute force krengy aur sum krengy elements ko jb tk sum target sum sy ziada na ho jaye. hum is me commulative sum aur binary search bhi use kr skty hy.

var answerQueries = function (nums, queries) {
    let answer = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < queries.length; i++) {
        let sum = 0;
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (sum + nums[j] <= queries[i]) {
                sum += nums[j];
                count++;
            } else {
                break;
            };
        };
        answer.push(count);
    };

    return answer;
};
console.log(answerQueries([4,5,2,1], [3,10,21])); // Output: [2,3,4]
