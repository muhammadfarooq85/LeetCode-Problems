// 1207. Unique Number of Occurrences

// Problem statement

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Understand the problem first

// hme aik array of integers dia gia hy hum ne true return krna hy agr us array ke tmam ints ki values ki occurrences unique ho mtlb agr 1 2 mrtaba aya hy tu 3 3 mrtaba aye

// Solution

// hum log do data sets ko use kre aik hashmap aur doosra set. Hashmap me me hum key uski value ko bnae ge aur then value me uski occurrences dale ge. Set me hum just us hashmap ki values ko store kre ge hum log jante hy ke set data structure unique values store krta hy. then hum hashmap ka aur set ka size compare kre ge agr same hoa tu true warna false kyu ke dekhe agr hashmap me aik bi duplicate value a jati hy then hum jb usko store kre ge tu size km ho jaye ga aur false return ho jaye ga.

var uniqueOccurrences = function(arr) {
    const freq = new Map();

    // Step 1: Count frequencies
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Step 2: Put frequencies into a Set
    const seen = new Set(freq.values());

    // Step 3: If Set size == Map size => all unique
    return freq.size === seen.size;  
};

console.log(uniqueOccurrences([1,2,2,1,1,3])); // true
console.log(uniqueOccurrences([1, 1, 2, 3])); // false
