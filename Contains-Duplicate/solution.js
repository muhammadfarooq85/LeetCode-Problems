// 217. Contains Duplicate

// Problem Statement

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Understand the problem first...

// hme aik array of integers dia gia hy jis ka name hy nums. Hum ne return `true` krna hy agr at least koi bi number 2 mrtaba repaeat ho is ka mtlb hoa ka wo do se ziada mrtaba bi ho skta hy. agr tmaam hi unique hy tu hum ne false return krna hy.

// Solution

// Hm sb se pehle loop lgae ge aur hr number ko nikal le ge then hr number ko aik object me dalte rahe ge ke agr wo hy pehle se us object me tu uski value ko increemnt kr do warna agr aik mrtaba hy tu us ki value 1 hi krni hy. Then us object per for in loop lga ke chke kr le ge ke agr koi bi value hme 2 ya is se ziada mrtaba repaeat hoti dekhe yu return kr true warna false.

let containsDuplicate = function (nums) {
  let allNumsCounts = {};
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    if (!allNumsCounts[nums[i]]) {
      allNumsCounts[nums[i]] = 1;
    } else {
      allNumsCounts[nums[i]]++;
    }
  }
  for (key in allNumsCounts) {
    if (allNumsCounts[key] >= 2) {
      result = true;
    }
  }
  return result;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
