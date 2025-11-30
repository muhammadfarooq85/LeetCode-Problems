// 997. Find the Town Judge

// Problem statement:

// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
/*
If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.*/

// Understand the problem first:

// hme ail array of integers trust dia gia hy jo ke trust relationship ko represent krta hai. hme ye find krna hai ki town judge kaun hai ya fir -1 return krna hai agar judge exist nhi krta

// Approach and Solution:

// indegree aur outdegree ka concept use krenge. indegree represent krta hai ki kitne log ek particular person ko trust krte hain aur outdegree represent krta hai ki ek particular person kitne logon ko trust krta hai. town judge ka indegree hoga n-1 (kyunki sab usko trust krte hain) aur outdegree hoga 0 (kyunki wo kisi ko trust nhi krta).

var findJudge = function (n, trust) {
  let inDegree = new Array(n + 1).fill(0);
  let outDegree = new Array(n + 1).fill(0);

  for (let person of trust) {
    let i = person[0];
    let j = person[1];
    outDegree[i]++;
    inDegree[j]++;
  }

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === n - 1 && outDegree[i] === 0) {
      return i;
    }
  }

  return -1;
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
); // Output: 3
