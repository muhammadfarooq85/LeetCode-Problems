// 349. Intersection of Two Arrays

// Problem statement

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Understand the problem first

// hme simple two arrays dia gye hu nums1 and nums2 hum ne in ka intersection nikalna hy aur result hamesha unique hona chahie order matter nahi krta

// Solution

// simple aik set bnae ge jis me hum log kisi aik array ko dal de ge aur then us set me hamesha unique values hi ho gi aur then doosre array pe loop lga ke chk kr le ge ke agr doosre array wale element present hy hy pehle wale me tu tu hum result me us array of num ko push kr de ge aur usko del krwa de ge ta ke unique intersection ho

var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1);
    const result = [];

    for (let num of nums2) {
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num);
        };
    };
    return result;
};
console.log(intersection([1,2,2,1], [2,2])); // [2]
console.log(intersection([1,2,2,1], [1,2])); // [1,2]

