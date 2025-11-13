// 2007. Find Original Array From Doubled Array

// Problem statement:

// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array. Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

// Understand the problem:

// hme aik int of array changed di gai hai jisme original array k elements k double value bhi shamil hain. Hme original array ko wapis nikalna hai agar changed array doubled array hai, warna empty array return karna hai.

// Approach and Solution:

// sb se pehle odd aur even ko check kre ge agr odd hoa tu empty array return kr denge. phir changed array ko sort kr denge. us k bad aik map bnaenge jisme har element ki frequency store krenge. phir sorted changed array k elements ko iterate krenge aur check krenge k kya us element ka double map me hai aur uski frequency 0 se zyada hai. agr hai tu original array me us element ko push kr denge aur dono elements ki frequency map me decrease kr denge. akhir me original array return kr denge.
var findOriginalArray = function(changed) {
    const n = changed.length;
    
    // Odd length
    if (n % 2 !== 0) {
        return [];
    }
    
    changed.sort((a, b) => a - b);
    
    const mp = new Map();
    
    // Store frequency of each number
    for (const num of changed) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }
    
    const result = [];
    
    for (const num of changed) {
        const twice = 2 * num;
        
        if (mp.get(num) === 0) continue; // Skip
        
        if (!mp.has(twice) || mp.get(twice) === 0) {
            return [];
        }
        
        result.push(num);
        
        mp.set(num, mp.get(num) - 1);
        mp.set(twice, mp.get(twice) - 1);
    }
    
    return result;
};

console.log(findOriginalArray([1,3,4,2,6,8])); // [1,3,4]
