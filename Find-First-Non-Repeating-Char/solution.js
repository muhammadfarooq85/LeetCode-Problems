// 387. First Unique Character in a String

// Problem statement

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Understand the problem first...

// hme aik s name ka string dia gia hy hum ne us me se jo pehle number pe non repeating letter ko dond kr uska index return krna hy. Agr koi non-repeating letter nahi milta tu -1 return krna hy.

// Solution...

// solution ye hy ke hum ne sb se pehle in tamam letters ko loop ke through nikal lena hy pir. Is ke baad hme ye chk krna hy ke konsa letter kitni mrtaba aya hy. Agr ye kr lia tu hmara kaam asan ho jaye ga. Hum ne us object per loop kr ke wo pehla letter jo aik mrtaba aya hy string me us ko get kr ke loop ko wahi pause kr dena hy. Iske bad hum ne us letter ka original string me se index nikalna hy jis ke liye hum indexOf ka method use kre ge. Agr koi bi aesa letter jo aik mrtaba nahi aya tu hum -1 retutnm kr de ge. 

let firstUniqChar = function (s) {
  let uniqueChars = {};
  let result = null;
  for (let value of s) {
    if (uniqueChars[value]) {
      uniqueChars[value]++;
    } else {
      uniqueChars[value] = 1;
    }
  }

  const keys = Object.keys(uniqueChars);
  for (let key in keys) {
    if (uniqueChars[keys[key]] === 1) {
      const findIndexOfFirstNonRepeatingInt = s.indexOf(keys[key]);
      result = findIndexOfFirstNonRepeatingInt;
      break;
    } else {
      result = -1;
    }
  }
  return result;
};

console.log(firstUniqChar("loveleetcode"));

// console.log("loveleetcode".indexOf("e"));
