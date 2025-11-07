// 2192. All Ancestors of a Node in a Directed Acyclic Graph

// Problem statement:

// You are given a positive integer n representing the number of nodes of a Directed Acyclic Graph (DAG). The nodes are numbered from 0 to n - 1 (inclusive). You are also given a 2D integer array edges, where edges[i] = [fromi, toi] denotes that there is a unidirectional edge from fromi to toi in the graph. Return a list answer, where answer[i] is the list of ancestors of the ith node, sorted in ascending order. A node u is an ancestor of another node v if u can reach v via a set of edges.

// Understanding the Problem:

// hme aik DAG diya hai jisme n nodes hain aur edges diye gaye hain jo nodes ke beech ke connections ko represent karte hain. Humein har node ke ancestors find karne hain, jiska matlab hai ki humein un nodes ko dhoondhna hai jo kisi given node tak pahunch sakte hain through the directed edges.

// Approach and Solution:

// hum ne sb se pehle aik graph build krna hy using adjacency list representation. Phir hum topological sorting ka use karenge to process nodes in a linear order. Jab hum ek node ko process karenge, hum uske ancestors ko uske children nodes mein propagate karenge. Finally, hum ancestors ko sorted order mein return karenge.  

var getAncestors = function(n, edges) {
    // Initialize result array to store ancestors for each node
    let result = new Array(n);
    // Adjacency list to represent the graph
    let adj = new Map();
    // Array to track indegree of each node
    let indegree = new Array(n).fill(0);
    
    // Initialize result with empty arrays for each node
    for (let i = 0; i < n; i++) {
        result[i] = [];
    }
    
    // Build the graph and calculate indegrees
    for (let edge of edges) {
        let u = edge[0]; // source node
        let v = edge[1]; // destination node
        
        // Add edge to adjacency list
        if (!adj.has(u)) {
            adj.set(u, []);
        }
        adj.get(u).push(v);
        
        // Increment indegree of destination node
        indegree[v]++;
    }
    
    // TOPOLOGICAL SORTING using Kahn's algorithm
    let queue = [];
    // Find all nodes with indegree 0 (no incoming edges)
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let topoOrder = [];
    // Process nodes in topological order
    while (queue.length > 0) {
        let curr = queue.shift(); // Get node from front of queue
        topoOrder.push(curr);
        
        // Process all neighbors of current node
        if (adj.has(curr)) {
            for (let v of adj.get(curr)) {
                indegree[v]--; // Reduce indegree of neighbor
                if (indegree[v] === 0) {
                    queue.push(v); // Add to queue if no more incoming edges
                }
            }
        }
    }
    
    // Array of sets to store ancestors for each node
    let vec = new Array(n);
    for (let i = 0; i < n; i++) {
        vec[i] = new Set();
    }
    
    // Process nodes in topological order to build ancestor sets
    for (let node of topoOrder) {
        if (adj.has(node)) {
            for (let v of adj.get(node)) {
                // Add current node as direct ancestor
                vec[v].add(node);
                // Add all ancestors of current node to the neighbor's ancestors
                for (let ancestor of vec[node]) {
                    vec[v].add(ancestor);
                }
            }
        }
    }
    
    // Convert sets to sorted arrays for final result
    for (let i = 0; i < n; i++) {
        result[i] = Array.from(vec[i]); // Convert set to array
        result[i].sort((a, b) => a - b); // Sort in ascending order
    }
    
    return result;
};

console.log(getAncestors(5, [[0,1],[0,2],[1,3],[2,3],[3,4]])); // Expected output: [[],[0],[0],[0,1,2],[0,1,2,3]]
