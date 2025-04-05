// 4. Median of Two Sorted Array

// Problem statement

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Understand the problem statement

// hme do arrays dia gaye hy nums1 aur nums2 ke name se. Jo ke sorted hy. Hum ne un dono arrays ka median number return krna hy.

// Solution

// sbe se pehle un dono arrays ko merge kr le ge sorted form me. Then uska median nikal le ge.

let findMedianOfTwoSortedArray = (arr1, arr2) => {
  let merge = (nums1, nums2) => {
    let mergedArr = new Array(nums1.length + nums2.length);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while (p1 < nums1.length || p2 < nums2.length) {
      // used for out of the bond
      let val1 = p1 < nums1.length ? nums1[p1] : Number.MAX_VALUE;
      //   console.log("val1==> ", val1);
      // used for out of the bond
      let val2 = p2 < nums2.length ? nums2[p2] : Number.MAX_VALUE;
      //   console.log("val2==> ", val2);
      if (val1 < val2) {
        // assigning val1 into the p3 location
        mergedArr[p3] = val1;
        // if val1 pop then moving its pointer
        p1++;
      } else {
        // assigning val2 into the p3 location
        mergedArr[p3] = val2;
        // if val2 pop then moving its pointer
        p2++;
      }
      // we always move our pointer because there will be at least one value will be small. there is n chance of equvilance value. Becuase values are already in sorted order.
      p3++;
    }
    return mergedArr;
  };
  let mergedArr = merge(arr1, arr2);
  let length = mergedArr.length;
  if (length % 2 === 0) {
    // If even length, average the two middle elements
    return (mergedArr[length / 2 - 1] + mergedArr[length / 2]) / 2;
  } else {
    // If odd length, return the middle element
    return mergedArr[Math.floor(length / 2)];
  }
};

console.log(findMedianOfTwoSortedArray([2, 3, 5], [4, 7, 8])); // [2. 3, 4, 5, 7, 8] ===> 4.5
