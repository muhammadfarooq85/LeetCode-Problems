// 2492. Minimum Score of a Path Between Two Cities

// Problem statement 

// You are given a positive integer n representing n cities numbered from 1 to n. You are also given a 2D array roads where roads[i] = [ai, bi, distancei] indicates that there is a bidirectional road between cities ai and bi with a distance equal to distancei. The cities graph is not necessarily connected. The score of a path between two cities is defined as the minimum distance of a road in this path. Return the minimum possible score of a path between cities 1 and n.

// Understand the problem first

// hme aik 2D array di hui hai jisme roads diye gaye hain aur hme 1 se n tak ka minimum score find karna hai. Score ka matlab hai ki path me jo bhi roads hain unme se minimum distance wala road. Hme aise path find karna hai jisme minimum distance wala road sabse chhota ho.

// Approach and Solution

// hum sb se pehle aik graph build kre ge jis ka maqsad ye hoga ki hum easily roads ko traverse kr skein. Phir hum DFS (Depth First Search) ka use kr ke graph ko traverse krenge aur har road ka distance check krenge. Hum ek variable maintain krenge jo ki minimum distance ko store karega. Jab hum graph ko traverse kr lein to wo variable hi humara answer hoga.

var minScore = function(n, roads) {
    
    // Build graph
    const graph = new Map();
    for (let i = 1; i <= n; i++) {
        graph.set(i, []);
    }
    
    for (const [u, v, dist] of roads) {
        graph.get(u).push([v, dist]);
        graph.get(v).push([u, dist]);
    }
    
    let minEdge = Number.MAX_SAFE_INTEGER;
    const visited = new Set();
    
    const dfs = (node) => {
        if (visited.has(node)) return;
        visited.add(node);
        
        for (const [neighbor, dist] of graph.get(node)) {
            minEdge = Math.min(minEdge, dist);
            dfs(neighbor);
        }
    };
    
    dfs(1);
    return minEdge;
};

console.log(minScore(4, [[1,2,9],[2,3,6],[2,4,5],[1,4,7]])); // Output: 5
