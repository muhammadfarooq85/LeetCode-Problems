// 1672. Richest Customer Wealth

// Problem statement

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Unserstand the problem first...

// hme aik 2-D array dia gia hy jis me uno ne kaha hy ke i apka bank hy jbke j apke customer ke accounts hy hum ne ye find krna hy ke klonse bnde ke pas ziada paese hy.

// Solution

// Simple nested loop lga ke sum kr ke then ye chk kre ge kis ke paese ziada hy then simply return kr rahe hy

let maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }

    if (sum > maxWealth) {
      maxWealth = sum;
    }
  }

  return maxWealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [2, 3],
  ])
); // 6
