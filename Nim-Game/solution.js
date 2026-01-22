// 292. Nim Game

// Problem statement:

// You are playing the following Nim Game with your friend:
/*
Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false. */

// Understand the problem first:

// hme aik number n hai jo stones ki total quantity hai
// hum aur humara dost turn lete hain stones ko remove karne ke liye
// har turn mein 1 se 3 stones remove kar sakte hain
// jo last stone remove karega wahi jeetega
// hume yeh batana hai ki kya hum jeet sakte hain agar dono players optimal strategy use karte hain

// Approach and Solution:

// Agar n 4 ka multiple hai to hum hamesha haar jayenge agar dono players optimal strategy use karte hain
// Kyunki hum jitne bhi stones remove karenge, dost aise stones remove karega ki bacha hua stones ka count phir se 4 ka multiple ban jaye
// Isliye agar n % 4 == 0 hai to hum false return karenge, warna true return karenge

function canWinNim(n) {
  return n % 4 !== 0;
}

console.log(canWinNim(4)); // false
