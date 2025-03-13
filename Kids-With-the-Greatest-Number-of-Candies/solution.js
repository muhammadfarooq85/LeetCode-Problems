// 1431. Kids With the Greatest Number of Candies

// Problem statement

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

// Understand the problem first...

// hme aik candies ki array di gai hy jaha per hr candy ka index hr kid ko demonstrate kr raha hy. hme aik aur candies nam ki int di gai hy. hum ne boolean of array return krni hy. Hme hr kid ke index per true return krna hy agr uske pas mujood candy aur extraCandy de ke agr wo sb se badi candy ke equal ya greater hy warna false.

// Solution

// sb se pehle ye find krna hy ke kis kid ke pas maximum candy hy then hum hr kid ko us ke pas jo candy hy us me extra candy de ke chk kre ge kia wo condidtion met kr rahi hy ya nahi

let kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let maxCandy = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandy) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); //  [true,true,true,false,true]
