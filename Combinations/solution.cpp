#include "bits/stdc++.h"
using namespace std;
class Solution
{
public:
    vector<vector<int>> ans;

    // combine(4, 2)

    // solve(1, 4, 2, {})
    // solve(2, 4, 1, {1})
    // solve(3, 4, 0, {1, 2})
    // solve(3, 4, 1, {1})
    // solve(4, 4, 0, {1, 3})
    // solve(4, 4, 1, {1})
    // solve(5, 4, 0, {1, 4})
    // solve(5, 4, 1, {1})
    // solve(2, 4, 2, {})
    // solve(3, 4, 1, {2})
    // solve(4, 4, 0, {2, 3})
    // solve(4, 4, 1, {2})
    // solve(5, 4, 0, {2, 4})
    // solve(5, 4, 1, {2})
    // solve(3, 4, 2, {})
    // solve(4, 4, 1, {3})
    // solve(5, 4, 0, {3, 4})
    // solve(5, 4, 1, {3})
    // solve(4, 4, 2, {})
    // solve(5, 4, 1, {4})
    // solve(5, 4, 2, {})

    void solve(int start, int n, int k, vector<int> &temp)
    {

        // no
        // no
        // yes -> {1,2}
        // no
        // yes -> {1,3}
        // no
        // yes -> {1,4}
        // no
        // no
        // yes -> {2,3}
        // no
        // yes -> {2,4}
        // no
        // no
        // no
        // yes -> {3,4}
        if (k == 0)
        {

            // {1,2}
            // {1,3}
            // {1,4}
            // {2,3}
            // {2,4}
            // {3,4}
            ans.push_back(temp);
            return;
        }

        // no
        // no
        // no
        // no
        // no
        // no
        // no
        // yes
        // yes
        // yes
        if (start > n)
            return;

        // {1}
        temp.push_back(start);

        // solve(2, 4, 1, {1})
        solve(start + 1, n, k - 1, temp);

        // {1,2} => {1}
        // {1,3} => {1}
        // {1,4} => {1}
        temp.pop_back();

        // solve(3, 4, 1, {1})
        solve(start + 1, n, k, temp);
    }

    vector<vector<int>> combine(int n, int k)
    {

        vector<int> temp;

        // solve(1, 4, 2, {})
        solve(1, n, k, temp);

        return ans;
    }
};
int main()
{

    Solution s1;
    int n = 4;
    int k = 2;
    vector<vector<int>> combinations = s1.combine(n, k);
    for (int i = 0; i < combinations.size(); i++)
    {
        for (int j = 0; j < combinations[i].size(); j++)
        {
            cout << combinations[i][j] << " ";
        }

        cout << endl;
    }
    return 0;
}