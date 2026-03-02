// 3819. Rotate Non Negative Elements

// Problem statement:

// You are given a 0-indexed integer array nums. Rotate the non-negative elements of nums to the right by k steps, where k is the number of non-negative elements in nums. return the resulting array.

// Understand the problem first:

// hme aik int of array di gai hai, hme usme se non-negative elements ko rotate krna hai right me by k steps, jaha k is the number of non-negative elements in the array.

// Approach and Solution:

// hme sbs se pohle non-negative elements ko count krna hai, uske baad unko rotate krna hai right me by k steps. then pir original position pe dalni bi hy

#include "iostream"
#include "vector"
using namespace std;

class Solution
{
public:
    vector<int> rotateElements(vector<int> &nums, long long k)
    {
        int n = nums.size();

        vector<int> pos;

        // Collect non-negative numbers
        for (int x : nums)
        {
            if (x >= 0)
            {
                pos.push_back(x);
            }
        }

        int m = pos.size();

        if (m == 0)
            return nums; // Nothing to rotate

        k %= m; // Reduce unnecessary rotations

        int cnt = 0;

        // Place rotated values back
        for (int i = 0; i < n; i++)
        {
            if (nums[i] >= 0)
            {
                int idx = (cnt + k) % m;
                nums[i] = pos[idx];
                cnt++;
            }
        }

        return nums;
    }
};

int main()
{
    return 0;
}