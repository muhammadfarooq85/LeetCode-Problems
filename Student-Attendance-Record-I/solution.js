// 551. Student Attendance Record I

// Problem statement

// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Understand the problem first

// hme aik string s dia gia hy jo ke students ki attendance ko represent kr raha hy. Us string me sirf teen trah ke letters hy `L`, `A` and `P`. Aik student eligibl hy attendance reward ke liye agr wo in do conditions ko met krta hy. Means ke wo student 3 din lga tar late na ho aur wo 2 din se km  absent ho

// Agr aik student ye crieteria meet krta hy tu true return kro warna false return kro.

// Solution

// Simply hum us string me ye count kr le ge ke kitni mrtaba absent hy aur late hy. Agr wo 3 din se ziada lga tar absent hy ya absent hy 2 din se ziada

var checkRecord = function (s) {
  // couting absent
  let absentCount = s.split("A").length - 1;
  // couting if the student has three consecutive lates
  let hasThreeConsecutiveLates = s.includes("LLL");
  // comapring students on our crieteria
  return absentCount < 2 && !hasThreeConsecutiveLates;
};

console.log(checkRecord("PPALLP")); // true
console.log(checkRecord("PPLLLP")); // false
