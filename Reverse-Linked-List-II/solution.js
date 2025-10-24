// 92. Reverse Linked List II

// Problem statement:
// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

// Understand the problem first

// hme aik single linked list di hui hai aur do integers left aur right diye gaye hain.
// left se right tak ke nodes ko reverse karna hai aur phir reversed list return karni hai.

// Approach and Solution

// hume phle aik dummy node create karna hoga jo head se pehle point karega.
// phir hume left position tak traverse karna hoga taki hum us node se pehle wale node ko paa saken.
// uske baad hum left se right tak ke nodes ko reverse karenge using pointer manipulation.
// finally, hum dummy.next return karenge jo new head of the modified list hoga.

var reverseBetween = function (head, left, right) {
    if (head == null) {
        return null;
    }

    if (head.next === null || left === right) {
        return head;
    }

    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let curr = prev.next;
    for (let i = 1; i <= right - left; i++) {
        let temp = prev.next;
        prev.next = curr.next;
        curr.next = curr.next.next;
        prev.next.next = temp;
    }

    return dummy.next;
};
