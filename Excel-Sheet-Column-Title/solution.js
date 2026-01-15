// 168. Excel Sheet Column Title

// Problem statement:

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// Understand the problem:

// hme aik column number dia gya hai aur hme uska corresponding column title return karna hai jaise Excel sheet me hota hai. Excel me columns A, B, C,..., Z ke baad AA, AB,..., AZ, BA,... chalte hain.

// Appraoch and Solution:

// 1. We can use a loop to repeatedly divide the column number by 26 (the number of letters in the English alphabet).
// 2. In each iteration, we find the remainder when the column number is decremented by 1 and then divided by 26. This gives us the index of the letter to be added to the result.
// 3. We convert this index to a character by adding it to the ASCII value of 'A'.
// 4. We prepend this character to our result string.
// 5. We then update the column number by performing integer division by 26 after decrementing it by 1.
// 6. We repeat this process until the column number becomes zero.

function convertToTitle(columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--;
    let remainder = columnNumber % 26;
    let char = String.fromCharCode(remainder + "A".charCodeAt(0));
    result = char + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
}

console.log(convertToTitle(1)); // Output: "A"
