// 3847. Find the Score Difference in a Game

// Problem statement:

// You are given an integer array nums, where nums[i] represents the points scored in the ith game. There are exactly two players. Initially, the first player is active and the second player is inactive.

/* 
The following rules apply sequentially for each game i:

If nums[i] is odd, the active and inactive players swap roles.
In every 6th game (that is, game indices 5, 11, 17, ...), the active and inactive players swap roles.
The active player plays the ith game and gains nums[i] points.
Return the score difference, defined as the first player's total score minus the second player's total score.
*/

// Understand the problem first:

// hme aik int of array nums dia hy jisme har element nums[i] represent krta hy points scored in ith game. Do players hain, initially first player active hy aur second player inactive hy. rule ye hy ke agar nums[i] odd hoga to active aur inactive players swap ho jayenge. Har 6th game me bhi active aur inactive players swap ho jayenge. Active player ith game khelta hai aur nums[i] points gain krta hai. Hme score difference return krna hai, jo ke first player's total score minus second player's total score hoga.

// Approach and Solution:

// hme aik firstPlayer ke turn ka variable bna lete hy then pir do variables bna lete hy firstPlayerScore aur secondPlayerScore ke liye. Fir loop chalayenge nums array ke through, har element ke liye check karenge ke kya wo odd hai ya nahi aur kya wo 6th game hai ya nahi. Agar odd hai aur 6th game hai to dono players swap honge, agar odd hai ya 6th game hai to bhi dono players swap honge. Fir check karenge ke kaun sa player active hai aur uske hisab se score add karenge. Loop ke end me firstPlayerScore me se secondPlayerScore minus kar denge aur return kar denge.

var scoreDifference = function (nums) {
    let firstPlayer = true;

    let firstPlayerScore = 0;
    let secondPlayerScore = 0;

    for (let i = 0; i < nums.length; i++) {

        let isOdd = (nums[i] % 2) !== 0;
        let isSixthGame = (i % 6) === 5;
        
        if (isOdd && isSixthGame) {
            firstPlayer = !firstPlayer;
            firstPlayer = !firstPlayer;
        } else if (isOdd || isSixthGame) {
            firstPlayer = !firstPlayer;
        };
        
        if (firstPlayer) {
            firstPlayerScore += nums[i];
        } else {
            secondPlayerScore += nums[i];
        };
        
    }
    
    return firstPlayerScore - secondPlayerScore;
};

console.log([1, 2, 3, 4, 5, 6]); // Output: -3
