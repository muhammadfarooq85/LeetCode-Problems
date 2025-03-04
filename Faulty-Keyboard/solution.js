// 2810. Faulty Keyboard

// Problem statement

// Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected. You are given a 0-indexed string s, and you type each character of s using your faulty keyboard. Return the final string that will be present on your laptop screen.

// Understand the problem first...

// asssume kre ke apke laptop ke keyboard ka i button faulty jb bi ap i type krte hu tu apne jo pehle type kia hy usko reverse kr do ge aur baqi character wese ke wese behave kre ge apne aik final string return krni hy.

// solution

// simply ye hy ke hum aik array initialize kre ge aur then lopp lga ke ye chk kre ge kia ye character wo faulty char means `i` hy tu jo array me pada hy usko reverse kr do bawqi chars wese hi expect kre ge.

var finalString = function (s) {
  let finalString = [];
  for (let keyBoardChar of s) {
    if (keyBoardChar === "i") {
      finalString.reverse();
    } else {
      finalString.push(keyBoardChar);
    }
  }
  return finalString.join("");
};

console.log(finalString("poiinter")); // ponter
