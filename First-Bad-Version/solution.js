// 278. First Bad Version

// Problem statement:

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// Understand the problem first:

// hme ek function diya hai isBadVersion(version) jo check krta hai ki koi version bad hai ya nahi. Hme pehla bad version find krna hai given n versions.

// Approach and Solution:

// 1. Use binary search to minimize the number of calls to isBadVersion.
// 2. Initialize two pointers, left and right, to represent the range of versions.
// 3. While left is less than right, calculate the mid-point.
// 4. If isBadVersion(mid) returns true, it means the first bad version is at mid or before, so move the right pointer to mid.
// 5. If isBadVersion(mid) returns false, it means the first bad version is after mid, so move the left pointer to mid + 1.
// 6. When left meets right, that position will be the first bad version.

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (isBadVersion(mid)) {
        // mid is bad, so the first bad version is at mid or before
        right = mid;
      } else {
        // mid is good, so the first bad version is after mid
        left = mid + 1;
      }
    }

    return left; // or right (both are same here)
  };
};
