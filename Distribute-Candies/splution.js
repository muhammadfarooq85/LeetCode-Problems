// 575. Distribute Candies

// Problem statement

// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Understand the problem statement first

// problem statement thodi complex hy but solution really much simple, alice ke pas kuch candies hy aur waha candies ki kuch type hy alice mota hota ja raha hy aur wo docotor ke pas gia hy aur doctor ke pas gia hy aur us ne kaha hy ke tumare pas jitni candies hy uska half kha lo. ab candies use pasand bu buht hy lekin ab usne socha ke kia me mukhtlif type ki candies kha lo tu doctor ki baat ko bi follow kr lo ga aur apna shoq bi hme ye btana hy ke wo kitni maximum type of candies kha skta hy lekin n/2 se related.

// Solution

// hum agr simply max allowed candies types find kr le aur then un available candies me unique kitni hy ye find kr le tu i think problem solve ho skti hy

var distributeCandies = function (candyType) {
  const uniqueAvailableTypes = new Set(candyType);
  const maxAllowedTypes = candyType.length / 2;
  return Math.min(uniqueTypes.size, maxAllowed);
};

console.log(distributeCandies([6, 6, 6, 6])); // 1
