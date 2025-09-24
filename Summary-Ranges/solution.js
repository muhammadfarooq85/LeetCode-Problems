// 228. Summary Ranges

// Problem statement

// You are given a sorted unique integer array nums. A range [a,b] is the set of all integers from a to b (inclusive). Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums. Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b


// Understand the problem first

// hmare pas aik array of int nums hy jo ke ascending order me sorted and unique hy. hum ne is array of int ki range nikani hy aur shortest ascending order me list return krni hy. aur ye ke us output me ye numbers include ho aur koi aur mtlb outside number na ho. ye bi ke age single range milti hy tu single number warna do number ranges return krni hy. yaad rahe ke ye range consecutive numbers me find krni hy.

// Solution

// hum is me simply loop lgae ge jo ke aur then aik range set kre ge jaha se start kre ge then chlte chle jaye ge kahi hme agr consecurtive number milte gaye like 0 ke bad 1 uske bad 2 then tu hum apne range extend krte jaye ge otherwise hum then pir on the base of single or double tu hum range array me dal de ge. range aese dalini hy like single hy tu "a", warna "a->b"

var summaryRanges = function (nums) {
    let ans = [];
    let i = 0; // pointer to feeze the startingyrecord of range
    while (i < nums.length) {
        let start = nums[i]; // start range
        while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
            i++;
        }
        let end = nums[i]; // end because it will stop at the number before consecutiveness
        // single number
        if (start === end) {
            ans.push(start.toString());
        } else {
            // double number
            ans.push(start + "->" + end);
        }

        i++;
    }
    return ans;
};

console.log(summaryRanges([0,1,2,4,5,7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0,2,3,4,6,8,9])); // ["0","2->4","6","8->9"]
