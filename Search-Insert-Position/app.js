// Problem Statement:-

// Given a sorted array of distinct `integers` and a `target` value, `return` the `index` if the `target` is `found`. If `not`, `return` the `index` where it `would be` if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Understand the problem first

// Hmare pas do array hy aik integers ka sorted array aur dosra target. Hum ne target ko integers ke array se find kr ke uska index return krna hy agr wo hy. Agr wo nahi hy tu usko jaha array me hona chahie waha ka index return krna hy.

// Solution

// Hum for ka loop lgae ge. aur ye chk kre ge agr hy tu uska index return kr do agr nahi hy tu hum ye compare kre ge kia array me pada hoa element is target se bada hy agr bada hy tu us numebr ka index iska hy. Is me hme asani di hoi ke uno ne hme array sort kr ke dia hoa hy.

// Let's assume first example. But we wrtie code for every example
const nums = [1, 3, 5, 6];
const target = 5;

let searchInsert = (n, t) => {
  let i = 0;
  for (i; i < n.length; i++) {
    if (n[i] === target) {
      return i; // index
    } else if (n[i] > target) {
      return i; // index
    }
  }
  return i; // Ye index is liye return krwae kyu ke third example me ye uper wali cond false ho rahi hy aur hme us ko end pe dal dena hy kyu ke loop end per punch gia ga...
};

console.log(searchInsert(nums, target));
