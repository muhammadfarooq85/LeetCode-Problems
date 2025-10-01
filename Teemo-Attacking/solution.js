// 495. Teemo Attacking

// Problem statement

// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack. You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration. Return the total number of seconds that Ashe is poisoned.

// Understand the problem first

// hmara aik hero teemo hy jo ke aik specific interval pe apne dushman pe attack krta hy jb bi attack krta hy tu hy aur agr uske poison ke effect ko end hone se pehle agr dobara attack ho gia tu timer reset ho jaye ga hum ne total time btana hy ke jb tk ke us poison ka asar baqi raha

// Solution

// iske liye hum simple brute force approach use kr skte hy

var findPoisonedDuration = function (timeSeries, duration) {
  let totalTime = duration; // pehle attack ke liye tu wo time rahe ga na isliye pehle se hi add kr lia
  for (let i = 0; i < timeSeries.length - 1; i++) {
    totalTime += Math.min(timeSeries[i + 1] - timeSeries[i], duration); // ye cheeze overlapping ka bahis ghlt timing calculate se bachne ke liye hy
  }
  return totalTime;
};

console.log(findPoisonedDuration([1, 6], 4)); // 8
console.log(findPoisonedDuration([1, 2], 4)); // 5
