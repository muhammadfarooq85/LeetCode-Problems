// 1394. Find Lucky Integer in an Array

// Problem Statement

//Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value. Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Understand the problem statement

// hmare pas aik array of ints hy hum ne luck maximum lucky integer find kr ke retrun krna hy. Lucky integer wo intgere hy jis ki occurrence in array is equal to itslef. agr koi bi nahi milta tu -1 return krna hy.

// Solution

// simply hasmap ka use kr ke freq au value store krwa le ge aur then ye chk kre ge ke aea wo lucky int hy ya nahi agr hy tu then max ka concept use kr ke maximum return kre ge.

let findLucky = function (arr) {
  let hashMap = {};

  for (let num = 0; num < arr.length; num++) {
    if (hashMap[arr[num]]) {
      hashMap[arr[num]] += 1;
    } else {
      hashMap[arr[num]] = 1;
    }
  }

  const hashMapKeys = Object.keys(hashMap);

  let ans = -1; // if no lucky integer we will return -1;
  for (let key of hashMapKeys) {
    if (Number(key) === hashMap[key]) {
      ans = Math.max(ans, Number(key));
    }
  }
  return ans;
};

console.log(findLucky([1, 1, 2, 2, 3, 3, 3, 3]));
