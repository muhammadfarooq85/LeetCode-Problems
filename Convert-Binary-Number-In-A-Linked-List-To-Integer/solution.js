// 1290. Convert Binary Number in a Linked List to Integer

// Problem statement

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value of the number in the linked list. The most significant bit is at the head of the linked list.

// Understand the problem first

// hme aik link list di gai hai jisme 0 aur 1 ke values hain. Ye link list ek binary number ko represent karti hai jisme head pe sabse significant bit hoti hai. Hume is binary number ko decimal (base 10) me convert karna hai aur return karna hai.

// Approach and Solution

// hum pehle nodes ko count kr le then pir har node ke value ko uske position ke hisab se decimal me convert krke add kr denge.

var getDecimalValue = function (head) {
    let count = 0;
    let curr = head;
    while (curr !== null) {
        count++;
        curr = curr.next;
    };
    console.log(count);
    let ans = 0;
    count = count -1
    while (head !== null) {
        console.log(head.val);
        ans = ans + (head.val * Math.pow(2, count));
        head = head.next;
        count--;
    };
    return ans;
};
