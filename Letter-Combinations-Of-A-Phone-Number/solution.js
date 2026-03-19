// 17. Letter Combinations of a Phone Number

// Problem statement:

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent based on the mapping of digits to letters on a phone keypad.

// Understand the problem first:

// hme aik string of int dia hai jisme 2-9 ke digits honge. Har digit ke corresponding kuch letters hote hain, jaise ki 2 ke liye "abc", 3 ke liye "def", aur aise hi aage. Humein un digits ke corresponding letters ke combinations nikalne hain.

// Approach and Solution:

// hum log isko backtracking ke through solve karenge. Hum ek mapping banayenge digits se letters ke liye, aur phir recursively combinations generate karenge.

var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const result = [];

    const map = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    };

    const solve = (idx, temp) => {
        if (idx >= digits.length) {
            result.push(temp);
            return;
        }

        let str = map[digits[idx]];

        for (let i = 0; i < str.length; i++) {
            solve(idx + 1, temp + str[i]);
        }
    };

    solve(0, "");

    return result;
};

console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
