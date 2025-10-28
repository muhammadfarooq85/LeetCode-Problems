// 2073. Time Needed to Buy Tickets

// Problem statement

// here are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line. You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i]. Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line. Return the time taken for the person initially at position k (0-indexed) to finish buying tickets.

// Understand the problem first

// hme aik array tickets di gai hai jisme har insaan ke tickets ki sankhya di hui hai. Humko yeh pata karna hai ki k position par jo insaan hai, uske tickets khatam hone mein kitna samay lagega. Har insaan ek ticket kharidne mein 1 second leta hai aur agar uske paas aur tickets hain to woh line ke end mein chala jata hai.

// Approach and Solution

// hme deqeue ka concept use karna hoga jisme hum pehle insaan ko line se nikalenge, uska ek ticket kharidenge aur agar uske paas aur tickets hain to usse line ke end mein wapas daal denge. Hum tab tak yeh process repeat karenge jab tak k position par wala insaan apne sare tickets khatam nahi kar leta.

var timeRequiredToBuy = function(tickets, k) {
    let queue = [];
    // Initialize queue with index and ticket count
    for (let i = 0; i < tickets.length; i++) {
        queue.push([i, tickets[i]]);
    }
    
    let time = 0;
    
    while (queue.length > 0) {
        let [i, t] = queue.shift(); // dequeue
        t--; // process one ticket
        time++;
        
        if (t > 0) {
            queue.push([i, t]); // enqueue if more tickets needed
        }
        if (i === k && t === 0) {
            return time;
        }
    }
    
    return time;
};

console.log(timeRequiredToBuy([2,3,2], 2)); // Output: 6
