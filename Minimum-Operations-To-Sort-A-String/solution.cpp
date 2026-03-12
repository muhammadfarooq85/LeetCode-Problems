// 3863. Minimum Operations to Sort a String

// Problem statement:

//  You are given a string s consisting of lowercase English letters. In one operation, you can select any substring of s that is not the entire string and sort it in non-descending alphabetical order. Return the minimum number of operations required to make s sorted in non-descending order. If it is not possible, return -1.

// Understand the problem first:

// hme aik string s di hui hy hum ne uske ke substring ko select kr ke us ko min operation me sort krna hy

// Approach and Solution:

// hum is ko sort kr ke dekhenge ki kya wo sorted string ke barabar hy agr ha to 0 return kr denge agr nahi to hum check krenge ki kya first ya last character sorted string ke first ya last character ke barabar hy agr ha to 1 return kr denge agr nahi to hum do tarah se sort krenge ek me first n-1 character ko sort krenge aur ek me last n-1 character ko sort krenge agr kisi me sorted string ke barabar ho jata hy to 2 return kr denge warna 3 return kr denge

#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int minOperations(string s)
    {
        string t = s;
        sort(t.begin(), t.end());

        if (s == t)
            return 0;

        int n = s.size();
        if (n == 2)
            return -1;

        if (t[0] == s[0] || t[n - 1] == s[n - 1])
            return 1;

        string s1 = s;
        sort(s1.begin(), s1.begin() + n - 1);
        sort(s1.begin() + 1, s1.end());

        string s2 = s;
        sort(s2.begin() + 1, s2.end());
        sort(s2.begin(), s2.begin() + n - 1);

        if (s1 == t || s2 == t)
            return 2;

        return 3;
    }
};

int main()
{
    Solution sol;
    string s = "cba";
    cout << sol.minOperations(s) << endl; // Output: 2
    return 0;
}