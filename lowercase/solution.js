// 709. To Lower Case

// Problem statement

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Understand the problem first...

// hme aik string dia gia hy `s` ke name se hme aik string return krna hy after replacing every uppercase letter to lowercase

// Solution

// simply ye hy ke hum us string ko lowercase kr de ge agr koi letter ya pora word uppercase hoa tu usko lowercase kr de ge agr wo already lowercase hy tu hum wese hi return kr de ge. isko hum loop lga ke bi kr skte hy ke agr wo letter uppercase hy tu hum suko lowercase kr de warna jo lowercase un ko wese hi rehne de

let lowerCase1 = (s) => {
  return s.toLowerCase();
};

let lowerCase2 = (s) => {
  let finalString = "";
  for (let letter of s) {
    if (letter == letter.toUpperCase()) {
      finalString += letter.toLowerCase();
    } else {
      finalString += letter;
    }
  }
  return finalString;
};

console.log(lowerCase1("Hello")); // hello
console.log(lowerCase2("Hello")); // hello
