// 1313. Decompress Run-Length Encoded List

// Problem statement

// We are given a list nums of integers representing a list compressed with run-length encoding. Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list. Return the decompressed list.

// Understand the problem first...

// hme aik array of nums di gai hy. frz krea ke us nums ki array me hr pair me pehli wali value frequency hy aur doosri value hy. hum ne hr pair me jo pehli wali value means freq se utni baar pair ki doosri value value ko repeat krni hy. Simple ye ke hum ne us value ko freq times repeat kr ke decompressed array return krni hy.

// Solution

var decompressRLElist = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    let freq = nums[i];
    let val = nums[i + 1];
    for (let i = 1; i <= freq; i++) {
      result.push(val);
    }
  }
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4])); // [2,4,4,4]