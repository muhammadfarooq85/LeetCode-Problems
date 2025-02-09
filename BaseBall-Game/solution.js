// 682. Baseball Game

// Porblem statement

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Understand the problem first...

// hme aik array dia jaye ga jis me numbers bi ho ge aur kuch englsih letters dia jaye ge hum ne ye krna hy ke agr us array me `+` aye tu hu ne previous two records ko plus kr ke aik new  record add krna hy agr `C` aye tu hum ne peechle record ko remove kr dena hy agr `D` aye tu pechle recoord ko double kr dena hy. aur in tmam ka sun return krna hy.

let calPoints = function (operations) {
  let record = [];
  let sum = 0;
  for (let opt of operations) {
    if (record && opt == "+") {
      let last = parseInt(record[record.length - 1]);
      let secondLast = parseInt(record[record.length - 2]);
      let sum = last + secondLast;
      record.push(sum);
    } else if (record && opt == "D") {
      let last = parseInt(record[record.length - 1]);
      record.push(last * 2);
    } else if (record && opt == "C") {
      record.pop(record[record.length - 1]);
    } else {
      record.push(opt);
    }
  }
  for (let num of record) {
    sum += Number(num);
  }
  return sum;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
