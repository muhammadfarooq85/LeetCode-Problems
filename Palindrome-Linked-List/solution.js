// 234. Palindrome Linked List

// Problem statement

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Understand the problem first

// hmare pas aik singly linked list hy hum ne return true krna hy agr wo plindrome hy warna false

// Solution

// simply sb se pehle aik stack me tmam node ko rakh le ge aur then again ye check kr le ge ke stack ka last poped element linked list se match krta hy ya nahi. hum aesa nahi kr skte ke linked list per reverse traverse kre kyu ke hmare pas address left se right ka hota hy na ke right se left ka.

// Note: Don't run this code on vs code untill you create you own singly linked list.
var isPalindrome = function (head) {
    let ptr1 = head;
    let stack = [];
    while (ptr1 !== null) {
        stack.push(ptr1.val);
        ptr1 = ptr1.next;
    }
    let ptr2 = head;
    while (ptr2 !== null) {
        let val1 = ptr2.val
        let val2 = stack.pop();
        if (val1 !== val2) {
            return false;
        }
        ptr2 = ptr2.next
    }
    return true;
};
console.log(isPalindrome([1, 2, 2, 1])); // true
