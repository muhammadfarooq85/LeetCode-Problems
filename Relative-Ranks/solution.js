// 506. Relative Ranks

// Problem statement

// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique. The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Understand the problem first

// hme aik array of integer score dia gia hy jaha per score[i] ith athelete ko represent kr raha hy. tmam ke tmama scores unique ho ge. first highest athelete ko Gold Medal dosre highest ko Silver Modal jbke teesre ko Bronze Modal mile ga. aur baqio ke liye just hum ne un ki rank ko string bna ke return kr dena hy ye bi ensure krna hy ke answer array me jese score[i] tha aese hi answer[i] me ith ki position ho.

// Solution

// sb se phle tu aik 2d array bnae ge jis me hum log indexing aur score store kre ge then usko descending order me sort kre ge then aik answer nam ka array bnae ge score ki length jitna then sorted array per loop lga ke check kre ge aur then usko answer array me correct position per dal de ge.

var findRelativeRanks = function (score) {
  const arr = score.map((s, i) => [s, i]); // [[score, index]]
  arr.sort((a, b) => b[0] - a[0]); // desc sort
  const result = new Array(score.length); // same length of array result
  for (let i = 0; i < arr.length; i++) {
    let rank;
    if (i === 0) rank = "Gold Medal";
    else if (i === 1) rank = "Silver Medal";
    else if (i === 2) rank = "Bronze Medal";
    else rank = (i + 1).toString();
    // inserting the rank in the correct position
    result[arr[i][1]] = rank;
  }
  return result;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1])); // [ 'Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5' ]
