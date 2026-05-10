// 18. 4Sum

// Problem statement:

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
/*
0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
*/

// Understand the problem statement first:

// hme aik int of array dia hua hy hme tmam unique quaduplets nikalne hy jin ka sum target ke equal ho aur wo tmama int ke indexes different ho. ap ans kisi bi order me return kr skte hy

// Approach and Solution:

// sb se pehle jo mind me approach ati hy wo ye hy ke hum 4 loop ko use kr ke nikal skte hy but it gives us TlE. So, hme koi efficient approach ki trf jana ho ga. isliye hum pointers ko effectively use kr ge aur array ko sort kre ge ta ke pointers ko sahi se use kr ske. hum do pointers le ge aur aik ko start me aur aik ko us se age rakhe aur aur baqi do ko baqi array ke first aur last element pe rakhe ge aur duplicated ko bi avoid kre ge take unique combinations nikle.

#include "vector"
#include "algorithm"
#include "iostream"
using namespace std;

class Solution
{
public:
    vector<vector<int>> fourSum(vector<int> &nums, int target)
    {
        vector<vector<int>> ans;

        sort(nums.begin(), nums.end());

        int n = nums.size();

        for (int i = 0; i < n; i++)
        {

            // Skip duplicate i
            if (i > 0 && nums[i] == nums[i - 1])
            {
                continue;
            }

            for (int j = i + 1; j < n; j++)
            {

                // Skip duplicate j
                if (j > i + 1 && nums[j] == nums[j - 1])
                {
                    continue;
                }

                int k = j + 1;
                int l = n - 1;

                while (k < l)
                {

                    long long sum =
                        (long long)nums[i] +
                        (long long)nums[j] +
                        (long long)nums[k] +
                        (long long)nums[l];

                    if (sum == target)
                    {

                        ans.push_back(
                            {nums[i], nums[j], nums[k], nums[l]});

                        k++;
                        l--;

                        // Skip duplicate k
                        while (k < l && nums[k] == nums[k - 1])
                        {
                            k++;
                        }

                        // Optional: Skip duplicate l
                        while (k < l && nums[l] == nums[l + 1])
                        {
                            l--;
                        }
                    }
                    else if (sum < target)
                    {
                        k++;
                    }
                    else
                    {
                        l--;
                    }
                }
            }
        }

        return ans;
    }
};

int main()
{
    Solution s;

    vector<int> nums = {1, 0, -1, 0, -2, 2};
    int target = 0;

    vector<vector<int>> result = s.fourSum(nums, target);

    for (auto &quad : result)
    {
        for (int num : quad)
        {
            cout << num << " ";
        }
        cout << endl;
    }

    return 0;
}