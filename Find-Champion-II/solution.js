// 2924. Find Champion II

// Problem statement:

// There are n teams numbered from 0 to n - 1 in a tournament; each team is also a node in a DAG. You are given the integer n and a 0-indexed 2D integer array edges of length m representing the DAG, where edges[i] = [ui, vi] indicates that there is a directed edge from team ui to team vi in the graph. A directed edge from a to b in the graph means that team a is stronger than team b and team b is weaker than team a. Team a will be the champion of the tournament if there is no team b that is stronger than team a. Return the team that will be the champion of the tournament if there is a unique champion, otherwise, return -1.

// Understand the problem first:

// hme simply aik directed graph di hui hai jismein har edge ek team ke doosri team se stronger hone ko dikhata hai. Humein yeh find karna hai ki kaun si team sabse strong hai, matlab aisi team jiske upar koi aur team nahi hai. Agar aisi unique team milti hai toh uska number return karna hai, warna -1 return karna hai.

// Approach and Solution:

// Lekin is se pehle apko indegree, outdgree and degree ka complete idea hona chahiye.

// 1. Create an array to keep track of in-degrees of each node (team).
// 2. Iterate through the edges and for each edge [u, v], increment the in-degree of team v.
// 3. After processing all edges, check how many teams have an in-degree of 0 (no team is stronger than them).
// 4. If exactly one team has an in-degree of 0, return that team's number; otherwise, return -1.

var findChampion = function (n, edges) {
  let hasIncomingEdge = new Array(n).fill(0);

  for (let edge of edges) {
    let to = edge[1];

    // from ---> to
    hasIncomingEdge[to]++;
  }

  let champ = -1;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (hasIncomingEdge[i] === 0) {
      champ = i;
      count++;
      if (count > 1) {
        return -1;
      }
    }
  }
  return champ;
};
console.log(3, [
  [0, 1],
  [1, 2],
]); // Output: 0
