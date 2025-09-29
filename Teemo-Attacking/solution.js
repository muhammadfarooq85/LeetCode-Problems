// 495. Teemo Attacking

// Problem statement

//

// Understand the problem first

//

// Solution

//

var findPoisonedDuration = function (timeSeries, duration) {
  let totalTime = duration; // pehle attack ke liye tu wo time rahe ga na isliye pehle se hi add kr lia
  for (let i = 0; i < timeSeries.length - 1; i++) {
    totalTime += Math.min(timeSeries[i + 1] - timeSeries[i], duration); // ye cheeze overlapping ka bahis ghlt timing calculate se bachne ke liye hy
  }
  return totalTime;
};
console.log(findPoisonedDuration([1, 6], 4)); // 8
console.log(findPoisonedDuration([1, 2], 4)); // 5


