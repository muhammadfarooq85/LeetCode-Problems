// Problem Statement

// Given an `integer` `x`, return `true` if `x` is a `palindrome`, and `false` `otherwise`.

// Understand the Problem first...

// hme aik integer dia gia hy jis ko x se represent kia gia hy. Apne true return krna hy agr x palindrome hy agr nahi tu false return krna hy.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Let's assume first example. However it will be applicable to all the previous mentioned examples.

let num = 121;

// Solution:-
// Hm ne isko pehle string me convert krna hy then isko split krna hy on the basis of nothing then isko reverse krna hy ta ke compare kre then isko join krna hy on the basis of nothing then isko string se number me convert krne ke liye parseInt ka use krna hy. Isko for loop se bi kr skte hy. Is ke ilawa aur bi tareqee hy jis ke through solve kr ske.

let isPalindrome = function (x) {
  const reversedNumberInStr = x.toString().split("").reverse().join("");
  return parseInt(reversedNumberInStr) === x;
};

console.log(isPalindrome(num));
