// 25. Reverse Nodes in k-Group

// Problem statement

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list. k is a positive integer and is less than or equal to the length of the linked list.  If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is. You may not alter the values in the nodes, only nodes themselves may be changed.

// Understand the problem first

// hme aik linked list di hui hy hum ne reverse krni hy har k nodes k bad agr last m kuch nodes bchy hy jo k se kam hn to unhe as it is rkhna hy

// Approach and Solution

// 1. First, we need to check if there are at least k nodes left in the linked list. If not, we return the head as it is.
// 2. If there are at least k nodes, we reverse the first k nodes.
// 3. After reversing the first k nodes, we recursively call the function for the rest of the linked list and connect the two parts.
// 4. Finally, we return the new head of the reversed linked list.

var reverseKGroup = function (head, k) {
    let temp = head;
    let count = 0;
    while (count < k) {
        if (temp == null) {
            return head;
        }
        temp = temp.next;
        count++;
    }

    let restOfLinkedList = reverseKGroup(temp, k);

    temp = head;
    count = 0;
    while (count < k) {
        let next = temp.next;
        temp.next = restOfLinkedList;
        restOfLinkedList = temp;
        temp = next;
        count++;
    }
    return restOfLinkedList;
};