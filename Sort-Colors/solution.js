// 75. Sort Colors

// Understand the problem first

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this problem without using the library's sort function.

// Understand the problem first

// hme aik array of nums dia gia hy jis me kuch numbers hy hr uno ne btaia hoa hy ke o means `red` 1 means `white` and 2 means `blue`. apne in place hi in colors ko aese arrange krna hy ke same colors qareeb ho. like pehle sare white, red, and blue. aur uno ne sirf teen hi integer dia hy mtlb 0,1 and 2. uno ne ye bi kaha hy ke apne isko bina kisi library ke solve krna hy.  

// Solution

// ye question dutch national flag ka use krta hy. hum pointers aur swapping ka use kr ke solve kr ge. hmare pas teen pointers ho ge aik start, end and mid. jaha per agr mid pe zero value ati hy tu hum start aur mid ko swap kre ge. Agr mid per 2 ati hy tu mid aur end ko swap kre ge. Agr mid per 1 ati hy tu just mid ko increment kre ge. aur swap finction just swapping kr raha hy. 

var sortColors = function (nums) {
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;
    while (mid <= end) {
        switch (nums[mid]) {
            case 0:
                swap(nums, start, mid)
                start++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(nums, mid, end)
                end--;
                break;
        };
    };
    function swap(nums, i, j) {
        let k = nums[i];
        nums[i] = nums[j]
        nums[j] = k
    }
};
console.log(sortColors([2, 0, 2, 1, 1])); // [ 0, 1, 1, 2, 2 ]
console.log(sortColors([ 0, 2 1])); // [ 0, 1, 1, 2, 2 ]
