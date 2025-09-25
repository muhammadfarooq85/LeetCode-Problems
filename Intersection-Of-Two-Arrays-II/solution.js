// 350. Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Understand the problem first

// hme two arrays nums1 and nums2 die gaye hy hum ne un ka intersection return krna hy. aur us ke ilawa hum ne result jb return krna hy tu jo element jitni mrtaba a rahe hy un ka result me return kr dena hy aur wo kisi order me ho skta hy.

// Solution

// simple intersection nikalne ke liye hum hashmap me nums1 ki freq aur number dal de ge then nums2 pe loop lga ke check kr le ge agr wo present hy tu de du aur uska freq count bu min kr do kyu ke hum ne aik mrtaba tu is ko dal dia hy result aur jb wo zero freq count ho jaye tu mtlb wo sahi result me push ho chuka hy

var intersect = function (nums1, nums2) {
  let hashMap = {};
  for (num1 of nums1) {
    if (hashMap[num1]) {
      hashMap[num1] += 1;
    } else {
      hashMap[num1] = 1;
    }
  }
  let ans = [];
  for (num2 of nums2) {
    if (hashMap[num2] > 0) {
      ans.push(num2);
      hashMap[num2] -= 1;
    }
  }
  return ans;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
