// 151. Reverse Words in a String

// Problem statement

// Given an input string s, reverse the order of the words. A word is defined as a sequence of non - space characters.The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space. Note that s may contain leading or trailing spaces or multiple spaces between two words.The returned string should only have a single space separating the words.Do not include any extra spaces.

// Understand the problem first

// hmare pas aik string `s` hy hum ne us string ko reverse krna hy. yadd rahe ke string `s` me leading ya trailing spaces na ho.

// Solution

// simply pehle right left space ko remove kr le ge then beech me agr 1 se ziada space ati hy tu usko handle kre ge then reverse kr ke join kre ge on the base of space so that words are formed.

var reverseWords = function (s) {
    // yaha regex me backward slash ka mtlb string, s ka mtlb space, aur + ka mtlb multiple spaces.
    return s.trim().split(/\s+/).reverse().join(" ");
};
console.log(reverseWords(" Hello Pakistan ")); // "Pakistan Hello" 
console.log(reverseWords("Pakistan")); // "Pakistan"
console.log(reverseWords("a good   example")); // "example good a"
