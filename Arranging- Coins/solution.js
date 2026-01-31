// 441. Arranging Coins

// Problem statement:

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete. Given the integer n, return the number of complete rows of the staircase you can build.

// Undersand the prblem first:

// hme aik n coins di hui hy hum ne un coins sy aik staircase bnani hy jisme k rows hon gi jahan ith row me i coins hon gy. Hum ne ye find krna hy k hum kitni complete rows bna skty hn.

// Approach and Solution:

// hme is ko itterative way se bil solve kr skte hy aur binry search way se bhi solve kr skte hy.

    let arrangeCoins = function (n) {
    let left = 0,
        right = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let curr = (mid * (mid + 1)) / 2;

        if (curr === n) {
        return mid;
        }

        if (curr < n) {
        left = mid + 1;
        } else {
        right = mid - 1;
        }
    }

    return right;
    };

console.log(arrangeCoins(3)); // 2
console.log(arrangeCoins(5)); // 2
