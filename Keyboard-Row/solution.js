// 500. Keyboard Row

// Problem statement

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below. Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

// Understand the problem first

// hme aik array of words strings di gaye humne ye btana hy ke kia ye word keyboard ki aik hi row se likha ja skta hy ke nahi jo ho words type kia ja skte hy end me un ko return krna hy

// Solution

// is me hum hashtable ko use kr ke asani se nikal skte hy

var findWords = function (words) {
  let rows = {
    firstRow: "qwertyuiop",
    secondRow: "asdfghjkl",
    thirdRow: "zxcvbnm",
  };

  let result = [];
  for (let word of words) {
    // word ke pehle letter ka row nikal lo
    let lowerWord = word.toLowerCase();
    // is se ap us row ke chars nikal rahe ho
    let rowChars = Object.values(rows).find((row) =>
      row.includes(lowerWord[0])
    );
    console.log(rowChars);

    // ab check karo ke saare letters usi row me hain ya nahi
    let isSameRow = true;
    for (let char of lowerWord) {
      if (!rowChars.includes(char)) {
        isSameRow = false;
        break;
      }
    }
    if (isSameRow) result.push(word);
  }
  return result;
};
console.log(["Hello", "Alaska", "Dad", "Peace"]); // ["Alaska","Dad"]
