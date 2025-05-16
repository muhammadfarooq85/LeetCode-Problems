// 125. Valid Palindrome

// Problem statement

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.

// Understand the problem first

// hmare pas aik strinf jis me differenct characters hy like small letters, capital letters, numbers, special letters and also numbers. So hme special chars ko neglect krna hy aur spaces ko bu aur ye btan hy ke wo string palindrome hy ya nahi. Aur ye bi ke agr capital aye tu hme usko small krna hy.

// Solution

// hum sb se pehle aik edge case lgae ge ke agr 1 hi length ka string ho tu true kro kyu ke wo palindrome hy. Pir hum itterate kre ge aur small,  capital and numbers ko dekhe ge. aur simply tmam condition ko chk kr ke aik filtered string bn jaye ga then reverse loop lga ke aik string me reverse view dasl de ge then compare kre ge.

let isPalindrome = (s) => {
    if (s.length === 1) {
        return true
    }
    let str = "";
    for (let char = 0; char < s.length; char++) {
        if (s[char] >= "a" && s[char] <= "z") {
            str += s[char];
        } else if (s[char] >= "A" && s[char] <= "Z") {
            let makeLowerCase = s[char].charCodeAt(0) - "A".charCodeAt(0) + "a".charCodeAt(0);
            str += s[makeLowerCase];
        } else if (s[char] >= "0" && s[char] <= "9") {
            str += s[char];
        }
    }
    console.log("str", str);
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    console.log("reverseStr", reverseStr);
    return str === reverseStr;
}

console.log(isPalindrome("a")) // true
console.log(isPalindrome(" ")) // true
console.log(isPalindrome("mom")) // true
console.log(isPalindrome("ahsan , 3434 , &^%")) // false
