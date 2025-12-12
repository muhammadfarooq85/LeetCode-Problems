// 215. Kth Largest Element in an Array

// Problem statement:

// Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element. Can you solve it without sorting?

// UNderstand the problem first:

// hme aik array dia gia hy hme us array ka kth largest element find karna hy.
// hme array ko sort nahi karna hy, hme heap ka use karna hy 

// Approach and Solution:

// hum islko sorting se bi solve kar sakty hain, lekin hme heap ka use karna hy.
// hum min heap ka use karain gy, aur jab bhi humara min heap ki size k se zyada ho jaye ga to hum min heap ka top element pop kar denge.

#include <vector>
#include <queue>
#include <iostream>
using namespace std;

class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        //min heap
        priority_queue<int, vector<int>, greater<int>> minh;
        
        for(int i:nums) {
            minh.push(i);
            if(minh.size() > k)
                minh.pop();
        }
        
        return minh.top();
    }
};

int main() {
    Solution sol;
    vector<int> nums = {3, 2, 1, 5, 6, 4};
    int k = 2;
    int result = sol.findKthLargest(nums, k);
    // Output should be 5, as it is the 2nd largest element in the array
    cout << "The " << k << "th largest element is: " << result << endl;
    return result;
}