// 118. Pascal's Triangle

// Problem statement

// Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Understand the problem first

// hmare pas aik integer numRows hy hum ne utni rows ki pascal's triangle return krni hy. Pascal's triangle me hmare pas jo row ka number hota hy wahi columns ka number aur then hr row ke first aur last me 1 hota hy aur then middle ki values hum pechle direct values se nikalte hy

// Solution

// hum simple sb se pehle nested loop lgae ge outer loop row per jb ke inner loop col per. Aur then hum sb se pehle row ke pehle aur akhri column me 1 dale ge aur them middle ki values ke liye hum formula use kre ge.

var generate = function (numRows) {
  let answer = [];
  for (let row = 0; row < numRows; row++) {
    let newRow = [];
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        newRow.push(1);
      } else {
        newRow.push(answer[row - 1][col - 1] + answer[row - 1][col]);
      }
    }
    answer.push(newRow);
  }
  return answer;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(3)); // [[1],[1,1],[1,2,1]]