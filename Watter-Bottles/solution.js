// 1518. Water Bottles

// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle. The operation of drinking a full water bottle turns it into an empty bottle. Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

// Understand the prolem first...

// hmare pas do variable hy aik numOfBottles aur ecxchnage ke hum ne hr exchange consdition ke badle aik fill water bottle hasil krni hy aur then ye return krna hy ke hum ne us exchange consition ke mutabiq kitni bottles pi li hy. like hmare pass 10 bottles hy aur hr 5 peene ke bd aik bottle fill mile gi tu total maximum drinable bottles 12 ho gi kyu ke 10 tu pee le ge aur do sxchange wali bottles. 

// Solution

// simple ye hy ke hum number of bottles ko divide krte rahe ge aur new bottles bi nikale ge aur maximum drinable bottles bi nikal ke add krte rahe ge. aur agr hmare pass jo bottles hy wo kam adh jati hy sxchnage bottles se then hum loop ko break kr ke bottles return kr de ge jo drinkable hy.

var numWaterBottles = function (numBottles, numExchange) {
  let maximumDrinkableBottles = numBottles;
  while (numBottles >= numExchange) {
    let newBottles = Math.floor(numBottles / numExchange);
    let remainingBottles = numBottles % numExchange;
    maximumDrinkableBottles += newBottles;
    numBottles = newBottles + remainingBottles;
  }
  return maximumDrinkableBottles;
};

console.log(numWaterBottles(10, 5)); // 12
console.log(numWaterBottles(4, 3)); // 5
console.log(numWaterBottles(15, 4)); // 19
