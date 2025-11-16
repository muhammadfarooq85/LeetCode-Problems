// 985. Sum of Even Numbers After Queries

// 985. Sum of Even Numbers After Queries


// You are given an integer array nums and an array queries where queries[i] = [vali, indexi]. For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums. Return an integer array answer where answer[i] is the answer to the ith query.

// Understand the problem first:

// hme array of nums int di gayi hy aur queries array di gayi hy jisme har query do values vali aur indexi hoti hy.
// Har query ke liye, pehle nums[indexi] ko vali se update karna hy, phir nums ke even values ka sum nikalna hy.
// Hume ek answer array return karna hy jisme har query ka result store hoga.

// Approach and Solution:

// hum aik variable sumEven banayenge jo even numbers ka sum rakhega.
// pehle hum nums array ko iterate karenge aur initial even sum calculate karenge.
// phir hum queries array ko iterate karenge aur har query ke liye:
// check karenge agar nums[indexi] even hy to usko sumEven se subtract karenge.
// nums[indexi] ko vali se update karenge.
// phir check karenge agar updated nums[indexi] even hy to usko sumEven me add karenge.
// har query ke baad sumEven ko result array me push karenge.
// akhir me result array return karenge.

var sumEvenAfterQueries = function(nums, queries) {
    const n = nums.length;
    const q = queries.length;
    
    let sumEven = 0;
    for (const x of nums) {
        if (x % 2 === 0) sumEven += x;
    }
    
    const result = [];
    
    for (let i = 0; i < q; i++) {
        const val = queries[i][0];
        const idx = queries[i][1];
        
        if (nums[idx] % 2 === 0) {
            sumEven -= nums[idx];
        }
        
        nums[idx] += val;
        
        if (nums[idx] % 2 === 0) {
            sumEven += nums[idx];
        }
        
        result.push(sumEven);
    }
    
    return result;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]])); // [8,6,2,4]
