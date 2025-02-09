// 1047. Remove All Adjacent Duplicates In String

// Problem Statement

// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them. We repeatedly make duplicate removals on s until we no longer can. Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// Understand the problem first...

// hme aik string `s` dia gia hy. Hum ne us me se jo adjacent means jo pas pas duplicates letter pade hy un ko remove kr ke unique string return krna hy. is masle ko solve krne ke liye hum stack ka concept istemal kre ge.

// Solution

// sb se pehle aik stack initialize kre ge. then hum loop lga ke hr letter ko nikale ge aur kia kre ge. then hum hr ane wale letter ko last letter se comaprte kre ge. Agr last letter ae wale letter se match kr jata hy tu hum usko remove kr de ge. agr nahi match hota tu usko push kr de ge last per. Yaad rakhe ke hum letter last per add kre ge aur last per hi reomve kre ge. is ke bad us stack ko join kr ke string return kr de ge.

let removeDuplicates = function (s) {
  stack = [];
  for (let letter of s) {
    if (stack && stack[stack.length - 1] === letter) {
      stack.pop(letter);
    } else {
      stack.push(letter);
    }
  }
  return stack.join("");
};
console.log(removeDuplicates("abbaca")); // ca
console.log(removeDuplicates("azxxzy")); // ay
console.log(removeDuplicates("adfgtftree")); // adgr

// a ==> 0 append
// d ==> 1 appnend
// f ==> 2 append
// g ==> 3 append
// t ==> 4 append
// f ===> 5 append
// t ==> 6 append
// r ==> 7 append
// e ==> 8 pop
// e ==> 9 pop
