// 11. Container With Most Water

// Problem statement:

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container.

// hme aik int of array height dia gia hy jo ke vertical lines ko represent kr raha hy hum ne wo do lines dondni hy jin ko draw krne se aik container form hota hy aur wo aesa container ho je ke maximum water store kre aur wo kitna pani store krta hy us ko return krna hy.

// Approach and Solution:

// hum log yaha pe aik tu loops se tmama containers nikal ke answer find kr skte hy but it gives us TLE. So, hum log two pointers ka use kre ge jis me hum aik pointer ko start me aur aik ko last me rakhe ge aur us pointer ke move krwae ge jis ke height small hy kyu ke matter wahi krti hy max height wala pointer nahi. then last me jo bi maximum containter water store kre ge usko return kr de ge.

#include "vector"
#include "iostream"
using namespace std;

class Solution
{
public:
    int maxArea(vector<int> &height)
    {
        int maxWater = 0;
        int l = 0;
        int r = height.size() - 1;
        while (l < r)
        {
            int h = min(height[l], height[r]);
            int w = r - l;

            maxWater = max(w * h, maxWater);

            if (height[l] < height[r])
            {
                l++;
            }
            else
            {
                r--;
            }
        }
        return maxWater;
    }
};

int main()
{
    Solution s;
    vector<int> nums = {1, 8, 6, 2, 5, 4, 8, 3, 7};

    int result = s.maxArea(nums);
    cout << result << endl;

    return 0;
}