// 2696. Minimum String Length After Removing Substrings

// Problem statement

// You are given a string s consisting only of uppercase English letters. You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s. Return the minimum possible length of the resulting string that you can obtain. // Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

// Understand the problem first

// hme aik string dia gia hy jis me se hum ne `AB` aur `CD` ko remove krna hy. aur remove kr ke end per jo string aye us ki length ko return krna hy

// Solution

// simply stack ka concept use kre ge.

var minLength = function (s) {
  let stack = [];
  for (let letter of s) {
    if (stack[stack.length - 1] === "A" && letter === "B") {
      stack.pop();
    } else if (stack[stack.length - 1] === "C" && letter === "D") {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }
  return stack.length;
};

console.log(minLength("ABFCACDB")); // 2
