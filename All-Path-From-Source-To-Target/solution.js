// 797. All Paths From Source to Target

// Problem statement

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order. The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Understand the problem first

// hme aik 2-D array diya hai jisme har index pe us node se jaha se hum ja sakte hai wo nodes diye gaye hai. Hme sare possible paths find karne hai jo node 0 se start hoke node n-1 pe end hote hai.

// Appraoch and Solution

// hume is me dfs approach use kre ge aur simple traversal kr ke sare paths find kr lenge. Jab bhi hum n-1 node pe pahuchenge to us path ko result me add kr denge.

let allPathsSourceTarget = function (graph) {
  const result = [];

  var DFS = (currentNode, currentPath) => {
    // Add current node to path
    currentPath.push(currentNode);

    // If we reached the target (last node)
    if (currentNode === graph.length - 1) {
      result.push([...currentPath]); // Store copy of path
    } else {
      // Explore all neighbors
      for (const neighbor of graph[currentNode]) {
        DFS(neighbor, currentPath);
      }
    }

    // Backtrack: remove current node before returning
    currentPath.pop();
  };

  // Start DFS from node 0 with empty path
  DFS(0, []);
  return result;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); // [[0,1,3],[0,2,3]]
