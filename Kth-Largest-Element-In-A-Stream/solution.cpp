// 703. Kth Largest Element in a Stream

// Problem statement:

// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Understand the problem first:

// hme aik stream me data mil raha hai aur hme usme se kth largest element nikalna hai. yaad rahe ke kth largest element sorted order me nikalna hai na ki distinct element me se.

// Approach and Solution:

// hum log min heap ka use karenge jisme hum sirf k elements rakhenge. jab bhi naya element aayega to hum usse heap me add karenge aur agar heap ka size k se zyada ho jata hai to hum smallest element ko remove kar denge. is tarah se heap me hamesha k largest elements rahenge aur heap ka root hi kth largest element hoga.

class KthLargest {
public:
    priority_queue<int, vector<int>, greater<int>> pq;
    int K;
    
    KthLargest(int k, vector<int>& nums) {
        K = k;
        for(int &x : nums) {
            pq.push(x);
            
            if(pq.size() > k)
                pq.pop();
        }
    }
    
    int add(int val) {
        pq.push(val);
        
        if(pq.size() > K)
            pq.pop();
        
        return pq.top();
    }
};