// 1962. Remove Stones to Minimize the Total

// Problem statement:

// You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k. You should apply the following operation exactly k times:
/*
Choose any piles[i] and remove floor(piles[i] / 2) stones from it.
Notice that you can apply the operation on the same pile more than once.
Return the minimum possible total number of stones remaining after applying the k operations.
floor(x) is the largest integer that is smaller than or equal to x (i.e., rounds x down).
*/

// Understand the problem first:

// hme aik zero index base int of array di gai hy aur sath me k int dia gia hy. hum ne hr stone ko half krna hy then pir k ko decrement kr dena hy then agr wo allow krta hy operation tu mazeed krne hy warna hum ne minimum sum return kr dena hy.

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

class Solution
{
public:
    int minStoneSum(vector<int> &piles, int k)
    {
        // Max-heap
        priority_queue<int> pq;

        // Push all piles into max-heap
        int sum = 0;
        for (int stones : piles)
        {
            pq.push(stones);
            sum += stones;
        }

        // Apply the operation k times
        while (k--)
        {
            int curr = pq.top();
            pq.pop();

            int remove = curr / 2; // floor(curr/2)
            sum -= remove;

            int remaining = curr - remove;
            pq.push(remaining);
        }

        return sum;
    }
};

// Optional main function for testing in VS Code
int main()
{
    vector<int> piles = {5, 4, 9};
    int k = 2;

    Solution s;
    cout << s.minStoneSum(piles, k) << endl; // Expected output: 12

    return 0;
}
