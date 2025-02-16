// 844. Backspace String Compare

// Problem statement

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character. Note that after backspacing an empty text, the text will continue empty.

// Understand the problem firs...

// hme do string dia gia hy `s` aur  `t` ke nam se. Agr wo equal ho tu true return krna hy agr nahi tu false. Iska crieteria ye hy ke hum ne un string me se jb `#` ka character aye tu hum ne peechle character ko remove kr dena hy. Mtlb wo backspace kr dena hy us character ko aur then comapare kr ke return kr dena hy.

// solution

// simple sa hal ye hy ke loop lga ke tmam characters ko nikal le ge. Then ye chk kre ge ke kaha per `#` a raha hy jaha per hash a raha hy us se akhri wale ko stack se pop krwa de ge then us stack per loop lga ge ke chk kr le ge ke true hy ya false

let solve = function (s, t) {
  let result1 = [];
  let result2 = [];
  let result1Letters = "";
  let result2Letters = "";

  for (let str1 of s) {
    if (str1 && str1 === "#") {
      result1.pop();
    } else {
      result1.push(str1);
    }
  }

  for (let str2 of t) {
    if (str2 && str2 === "#") {
      result2.pop();
    } else {
      result2.push(str2);
    }
  }

  for (let letters1 of result1) {
    result1Letters += letters1;
    // console.log(letters1);
  }

  for (let letters2 of result2) {
    result2Letters += letters2;
    // console.log(letters2);
  }

  return result1Letters == result2Letters;
};
console.log(solve("ab#c", "ad#c"));
