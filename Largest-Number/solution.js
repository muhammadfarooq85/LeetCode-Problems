// 179. Largest Number

// Problem statement

// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it. Since the result may be very large, so you need to return a string instead of an integer.

// Understand the problem first

// hme aik non-negative ints array of nums dia gia hy. Hum ne usko aese arrange krna hy ke largest number form ho. kyu ke result buht bada ho jaye ga jis ki waja se hme usko string me convert krna hy.

// Solution

// simply sb se pehle hr int ko string me convert kr le ge. Then hum sort kr rahe hy array ko is trah ke sb se bada number pehle aye aur then aik edge case bi lga rahe hy ke agr start me zero ho tu ap sero return kr do. then simply join kr ke return kr rahe hy. 

var largestNumber = function (nums) {
    const strNums = nums.map(String);
    // console.log(strNums); [ "10", "2" ]
    strNums.sort((a, b) => (b + a) - (a + b));
    // console.log(strNums) ["10", "2"]
    if (strNums[0] === '0') return '0';
    return strNums.join("");
};

console.log(largestNumber([10, 2])); // 210
console.log(largestNumber([0, 42])); // 420
