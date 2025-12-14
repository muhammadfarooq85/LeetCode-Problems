// 373. Find K Pairs with Smallest Sums

// Problem statement:

// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k. Define a pair (u, v) which consists of one element from the first array and one element from the second array. Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

// Understand the problem first:#

// hme do array of int dia gaye hy hum ne k pairs find krne hy jinka sum sbse chota ho.

// Approach and Solution:

// Hum isko brute force se kr skte hy by calculating all possible pairs and their sums, then sorting them and picking the first k pairs. But ye approach inefficient hogi for large arrays. Lekin hum log min heap (priority queue) ka use kr skte hy to efficiently get the k smallest sums. sb se pehle ye ke hum log sbse chote element ko pair krte hy dono arrays ke, phir uske baad next possible pairs ko heap me dalte hy. then we keep extracting the smallest pair from the heap until we have k pairs.

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    typedef pair<int, pair<int, int>> P;    
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        priority_queue<P, vector<P>> pq; // creating the priority qeue
        
        int m = nums1.size(); // nums1 size 
        int n = nums2.size(); // nums2 size
        
        for(int i = 0; i<m; i++) {
            for(int j = 0; j<n; j++) {
                
                int sum = nums1[i] + nums2[j]; // creating pair 

                if(pq.size() < k) {
                    // we want to maintain the size of the pq equal to k that's why implementing less than k
                    pq.push({sum, {i, j}});
                } else if(pq.top().first > sum) {
                    // in case if greater than k then we will copmpare the top sum with current pair sum then we will remove previous top sum from pq and push the current smaller sum
                    pq.pop();
                    pq.push({sum, {i, j}});
                } else {
                    // here we found our answer then we are breaking the loop
                    break; //Breaking from here (slight improvement)
                }
            }
        }
        // creating int of 2d array
        vector<vector<int>> result;
        // we are extracting the things from pq untill is empty 
        while(!pq.empty()) {
            auto temp = pq.top(); 
            pq.pop();
            
            int i = temp.second.first;
            int j = temp.second.second;
            result.push_back({nums1[i], nums2[j]});
        }
        // finally returning the result of smallest pair
        return result;
    }
};
