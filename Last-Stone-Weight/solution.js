// 1046. Last Stone Weight

// Problem statement 

// You are given an array of integers stones where stones[i] is the weight of the ith stone. We are playing a game with the stones.On each turn, we choose the heaviest two stones and smash them together.Suppose the heaviest two stones have weights x and y with x <= y.The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
// Return the weight of the last remaining stone.If there are no stones left, return 0.

// Understand the problem first

// simple si problem ye hy ke hme aik array of int stones dia gia hy jaha per hr index per aik stone ka wazan hy hum ne hr repetition pe two max stones lene hy aur smash krne hy is trah ke agr un ka weight equal hy tu destroy kr do warna bade wale stone ke weight se chotte wale ke weight ko minus kr do. aur ye kam tb tk krna hy jb tk last stone buch jaye agr koi bi nahi bchta tu 0 return krna hy.  

// Solution

// iske liye hum log sorting aur array ka sahara le ke problem ko solve kr le ge. sidi si baat hy ke tbhi tu khele ge jbi two stones ho ge islie hum ne starting me hi edge case lga dia hy

var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);
        let y = stones.shift();
        let x = stones.shift();
        if (y !== x) {
            stones.push(y - x);
        };
    };
    return stones.length === 1 ? stones[0] : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([2, 5, 3, 1])); // 1
