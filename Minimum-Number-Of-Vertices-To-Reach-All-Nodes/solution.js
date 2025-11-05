// 1557. Minimum Number of Vertices to Reach All Nodes

// Problem statement

// Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi. Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

// Understand the problem statement

// hme aik directed acyclic graph (DAG) diya gaya hai jisme n vertices hain, aur edges ka ek array diya gaya hai jo directed edges ko represent karta hai. Humein aise vertices ka smallest set find karna hai jinke through hum graph ke saare nodes tak pahunch sakte hain. Yeh bhi guarantee di gayi hai ki iska ek unique solution exist karta hai.

// Approach and Solution

// hum simple traversal kr ke is ko find kr skte hy sb se phel aik n length ki false array bnayen gy jisme har index represent kry ga k kya wo node kisi aur node se reachable hy ya nhi agr hy to us index pr true kr den gy agr nhi hy to false rhny dyen gy phir hum edges array pr traverse kren gy aur har edge k liye uske destination node k index pr true kr den gy end pr jo bhi index false rhe ga wo humari answer ka part hoga kyunki wo nodes kisi aur node se reachable nhi hy


var findSmallestSetOfVertices = function(n, edges) {
    let hasIncomingEdge = new Array(n).fill(false);
    
    for (let edge of edges) {
        let from = edge[0];
        let to = edge[1];
        
        // from ---> to
        hasIncomingEdge[to] = true;
    };
    
    const result = [];
    for (let i = 0; i < n; i++) {
        if (hasIncomingEdge[i] === false) {
            result.push(i);
        };
    };
    return result;
};

console.log(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]])); // [0,3]
