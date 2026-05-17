// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.

// Understand me the problem first:

// hme aik int of nums dia giya hu hum ne us me se longest consecutive sequence nikalni hy. Yaad rahe ke ye array unsorted hy. aur hme O(n) me solution nikalna hy.

// Approach and Solution:

// hum isko brute force se kr skte hy but ye TLE de de ga hum isko sort kr ke then sovle kr skte hy but us me bi ye TLE de de ga. Iska best solution hashtable ko use kr ke hum bna skte hy jis se O(n) time me solution nikl aye ga. Hashtable isliye ke hme repeatedly computations wadghira krne ki zaroorat nahi pade gi

#include "bits/stdc++.h"
using namespace std;

class Solution
{
public:
    int longestConsecutive(vector<int> &nums)
    {

        unordered_map<int, bool> numberTravelledMap;
        int longestLength = 0;

        // mapping
        for (int num : nums)
        {
            numberTravelledMap[num] = false;
        }

        // looping
        for (int num : nums)
        {
            int currentLength = 1;

            // Check in forward direction
            int nextNum = num + 1;

            while (numberTravelledMap.count(nextNum) &&
                   numberTravelledMap[nextNum] == false)
            {
                currentLength++;

                numberTravelledMap[nextNum] = true;

                nextNum++;
            }

            // Check in reverse direction
            int prevNum = num - 1;

            while (numberTravelledMap.count(prevNum) &&
                   numberTravelledMap[prevNum] == false)
            {
                currentLength++;

                numberTravelledMap[prevNum] = true;

                prevNum--;
            }
            // updating the till longest consecutive length
            longestLength = max(longestLength, currentLength);
        }

        return longestLength;
    }
};

int main()
{
    Solution s1;
    vector<int> nums = {100, 4, 200, 1, 3, 2};

    int ans = s1.longestConsecutive(nums);
    cout << ans << endl;

    return 0;
}