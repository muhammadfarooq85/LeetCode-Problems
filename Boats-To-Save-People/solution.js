// 881. Boats to Save People

// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit. Return the minimum number of boats to carry every given person.

// Understand the problem first

// hmare pas aik people ke name se array hy jis me hr hr number ka man ke chlie ke wo aik bnda hy aur wo value uska weight hy aur sath me aik aur constant dia gia hy limit ke name se. Hum ne ye find krna hy ke minimum kitni boats require ho gi un tmam people ko save krne ke liye. Aur sath me uno ne btaea hoa hy ke ap itni limit mtlb itna weight at a time dal skte ho boat per aur sirf do bndo ko at a time beta skte ho.

// Solution

// agr hum tmam logo ko hi aik aik boat assign kr de tu wo tu hmare pas minmum ka solution tu nah aye ga na. Hum ne ye dekhan hy ke minimum kitni hy. hum two pointers ki approach lgae ge. hm log aesa kre ge ke people ko sort kr le ge ta ke hum aik dafa me do aese bndo ko utae ke aik max weight wala ho aur aik min weight wala. tb tk logo ko uta ke un ko bitate rahe ge jb tk ke bnda pure beth na.

let numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boats = 0;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left += 1;
    }
    right -= 1;
    boats += 1;
  }
  return boats;
};

console.log(numRescueBoats([1, 2], 3)); // 1
console.log(numRescueBoats([1, 2, 3], 2)); // 3
