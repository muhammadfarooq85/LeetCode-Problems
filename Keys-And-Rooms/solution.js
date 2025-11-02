// 841. Keys and Rooms

// Problem statement:

// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key. When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms. Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

// Understand the problem first

// hume log is me dfs ko use kre ge aur then aik array create kre ge jisme hum ye track kre ge ke konsa room visit hua hai aur konsa nhi hua hai. phir hum room 0 se start kre ge aur uske sare keys le ke un rooms ko visit kre ge. agar sare rooms visit ho gaye to hum true return kre ge warna false.

// Appraoch and Solution

// 1. Create a boolean array visited of size n initialized to false, indicating that no rooms have been visited yet.
// 2. Define a DFS function that takes the current room index as an argument.
// 3. In the DFS function, mark the current room as visited.
// 4. Iterate through all the keys in the current room. For each key, if the corresponding room has not been visited, call the DFS function recursively for that room.
// 5. Start the DFS from room 0.
// 6. After the DFS completes, check if all rooms have been visited by verifying if all values in the visited array are true.
// 7. Return true if all rooms have been visited; otherwise, return false.

var canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  const visited = new Array(n).fill(false);

  const dfs = (room) => {
    visited[room] = true;

    for (const key of rooms[room]) {
      if (!visited[key]) {
        dfs(key);
      }
    }
  };

  // Start DFS from room 0
  dfs(0);

  // Check if all rooms are visited
  return visited.every((room) => room === true);
};
