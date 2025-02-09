// 2390. Removing Stars From a String

// Problem statement

// You are given a string s, which contains stars *.
// In one operation, you can:
// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:
// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

// Understand the problem first...

// hme aik string `s` ke name se dia gia hy hum ne is string me se star ko remove krna hy aur str ke left pe jo letter hy us ko bi remove krna hy aur then string return kr dena hy agr koi bi nahi milta tu pir empty string return kr dena hy.

// Solution

// is problem ko hal krne ke liye hum log stack data structire ka use kre ge. sb se pehle hum aik stack initialize kre ge then us string per loop lga ke hr hr letter ko nikal le ge then hum ye dekhe ke agr ane wala character * se match krta hy tu us se left wale ko remove kr do warna append  kr do. aik baat yaad rakhe ke hum comapre tb hi kr paye ge jb stack me kuch ho ga. Then is stack ko string me return kr de ge.

let removeStars = function (s) {
  let stack = [];
  for (let letter of s) {
    if (stack && letter === "*") {
      stack.pop(stack[stack.length - 1]);
    } else {
      stack.push(letter);
    }
  }
  return stack.join("");
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));

// e ===> 0 pop
// r ===> 1 pop
// a ===> 2 pop
// s ===> 3 pop
// e ===> 4 pop
// * ===> 5 pop
// * ===> 6 pop
// * ===> 7 pop
// * ===> 8 pop
// * ===> 9 pop
