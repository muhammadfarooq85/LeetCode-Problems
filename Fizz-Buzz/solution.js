// Problem Statement
// 412. Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Understand the problem first...

// hme aik number dia jaye ga hum ne 1 se le kr us number tk nums print krne hy aur un nums me jo num 3 aur 5 dono pe diviseable us number ki jaga per "FizzBuzz" aur jo number 3 ka diviseable ka hoa us ki jaga per "Fizz" aur jo 5 ka diviseable hoa us ki jaga per "Buzz" aur is ke jo number na 5 per na 3 per divide ho ske tu hme wo wese hi return krne hy.

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Solution

// hum ne sb se pehle 1 se le kr us word tk numbers print krne hy. Pir hum ne aik result ka array bna lena hy jis ko hum return kre ge. Pir hum ne condition lgani hy ke agr ane wala number 3 aur 5 ka divseable hy tu tu array me us ki jaga "FizzBuzz" push kr do aik aur condition lgae ge ke agr wo ane wala number 3 ka diviseable hy tu us ki jaga array me "Fizz" jb ke 5 ki jaga "Buzz" kr do.
// hme kese pta chle ga ke koi number kisi specific number ka diviseable hy ya nahi?
// hum agr us number ko us specific number per divide kre aur reminder 0 aye tu wo number us specific number per pura pura divide hota hy.

let printPatterns = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};
// const num = 3;
const num = 15;
console.log(printPatterns(num));
