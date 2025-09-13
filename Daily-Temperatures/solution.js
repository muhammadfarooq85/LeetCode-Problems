// 739. Daily Temperatures

// Problem statement

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Understand the problem first

// hme aik array of integers dia gye hy jo ke aik daily temperatures ko represent aur us din ke index uske din ki position mtlb ye ke pehle din mtlb 0 index pe koi temperatures ho ga. hum ne hum ne hr din se age next future warmer temperature dekhna hy agr just hi us ke next mil jaye tu us din ki position pe us aur is din ke index ka diff naikal ke dal dena hy answer array me warna 0 fill krna hy us din pe.

// Solution

// hum sb se pehle aik array bnae ge jis ko hum 0 se fill kr le ge us original array ki length ke equal. then hum simple nested loop lga ke chk kre ge ke agr next day per warmer temperature ata hy tu us din ke index per ye diff update kr de aur loop ko wahi break kr de ge inner loop aur isi trah krte chle jaye ge aur agr kahi na diff mila tu hmara zero pehle se fill hy

var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let answer = new Array(n).fill(0);
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // [[1,1,1,0]]