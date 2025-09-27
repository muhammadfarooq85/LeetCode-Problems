// 448. Find All Numbers Disappeared in an Array

// Problem statement

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Understand the problem first

// hme aik array of nums dia gye hy jaha per hr integer 1 se le kr n range tk di gia hy hme un tmam integers ko return krna hy jo ke 1 se le kr n tk hy

// Solution

// is me hum log brute force method bi apply kr skte hy aur efficient solution bi hum efficient solution ko apply kre ge. hum is me integers ko as indices position man le ge aur then us index ke int ko negative mark kr de ge then hmare pas marked array ho ga hum again us per itterate kr ke dekhe ge ke jo postive hy un ke index me  plus aik push kr de ge aur simply question solve kr de ge.

var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans.push(i + 1);
    }
  }
  return ans;
};

console.log(findDisappearedNumbers([1, 1])); // [2]
