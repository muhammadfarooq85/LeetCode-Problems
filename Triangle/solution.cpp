// 120. Triangle

// Problem statement:

// Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

// Understand the problem first:

// hme aik triangle array di hui hy hum ne minimum path sum from top to bottom return krna hy with some restrictions like agr hum i pe hy tu agli row ke i ya i + 1 pe hi ja skte hy

// Approach and Solution:

//

#include "bits/stdc++.h"
using namespace std;

class Solution
{
public:
    int minimumTotal(vector<vector<int>> &triangle)
    {

        int n = triangle.size();

        vector<vector<int>> dp(n, vector<int>(n, 0));

        for (int j = 0; j < n; j++)
        {
            dp[n - 1][j] = triangle[n - 1][j];
        }

        for (int i = n - 2; i >= 0; i--)
        {

            for (int j = 0; j <= i; j++)
            {

                int down = triangle[i][j] + dp[i + 1][j];

                int diagonal = triangle[i][j] + dp[i + 1][j + 1];

                dp[i][j] = min(down, diagonal);
            }
        }

        return dp[0][0];
    }
};

int main()
{
    Solution s1;
    vector<vector<int>> triangle = { {2},
                                     {3, 4},
                                     {6, 5, 7},
                                     {4, 1, 8, 3} }; int ans = s1.minimumTotal(triangle);
    return 0;
}