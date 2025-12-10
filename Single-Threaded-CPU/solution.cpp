// 1834. Single-Threaded CPU

// Problem statement:

// You are given n​​​​​​ tasks labeled from 0 to n - 1 represented by a 2D integer array tasks, where tasks[i] = [enqueueTimei, processingTimei] means that the i​​​​​​th​​​​ task will be available to process at enqueueTimei and will take processingTimei to finish processing.

// Understand the problem first:

// hme aik tasks nam ki aik array di gai hai jisme har task k liye do values hain: enqueueTime aur processingTime. enqueueTime wo time hai jab task available hota hai aur processingTime wo time hai jo task ko complete karne mein lagta hai. Humein tasks ko aise order mein process karna hai ke CPU hamesha available task mein se wo task choose kare jo sabse kam processingTime leta ho. Agar do tasks ka processingTime same ho to wo task choose karo jiska index chhota ho.

// Approach and Solution:

// 1. First, we will create a new array that includes the original index of each task along with its enqueueTime and processingTime.
// 2. We will sort this new array based on enqueueTime to process tasks in the order they become available.
// 3. We will use a min-heap (priority queue) to keep track of available tasks, prioritizing tasks with the smallest processingTime. If two tasks have the same processingTime, we will prioritize the task with the smaller index.
// 4. We will simulate the CPU processing by iterating through the sorted tasks and adding them to the heap when they become available. We will then process tasks from the heap until all tasks are completed.
// 5. Finally, we will return the order in which the tasks were processed. 

#include <array>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> getOrder(vector<vector<int>>& tasks) {
        int n = tasks.size();
        
        vector<array<int, 3>> sortedTasks;
        
        for(int i = 0; i<n; i++) {
            int start_time = tasks[i][0];
            int processing_time = tasks[i][1];
            
            sortedTasks.push_back({start_time, processing_time, i});
        }
        
        //sort it
        sort(begin(sortedTasks), end(sortedTasks)); //O(nlogn)
        
        vector<int> result;
        
        long long curr_time = 0;
        int idx             = 0;
        
        priority_queue< pair<int, int>, vector<pair<int, int>>, greater<> > pq; //min_heap
        
        while(idx < n || !pq.empty()) {
            
            if(pq.empty() && curr_time < sortedTasks[idx][0]) {
                curr_time = sortedTasks[idx][0];
            }
            
            
            while(idx < n && sortedTasks[idx][0] <= curr_time) {
                pq.push({sortedTasks[idx][1], sortedTasks[idx][2]}); //log(n)
                idx++;
            }
            
            pair<int, int> curr_task = pq.top();
            pq.pop();
            
            curr_time += curr_task.first; //processing time
            result.push_back(curr_task.second);
        }
        
        return result;
    }
};
// Time Complexity: O(n log n) due to sorting and heap operations.
// Space Complexity: O(n) for storing tasks in the heap and indexedTasks.
