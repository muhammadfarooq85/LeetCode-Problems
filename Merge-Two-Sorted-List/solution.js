// 21. Merge Two Sorted Lists

// Problem statement

// You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.

// Understand the problem first

// hamre pas do sorted list hy list1 and list2 ke name se. hum ne merge krna hy aur then hum ne merged list ka head return krna hy

// Solution

// sb se pehle do pointer le ge aur ye chekc kr le ge konsi chotti hy ya badi value aur then jo choti hy wo pehle aur jo badi hy wo bad me. Aur pointer ko age move kr de ge. Then jo list null ho jaye gi uski opposite ko uske sath attach kr de ge. aur then last pe head return kr de ge.

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
    let ans = dummy;
    let ptr1 = list1;
    let ptr2 = list2;
    while (ptr1 !== null && ptr2 !== null) {
        if (ptr1.val < ptr2.val) {
            dummy.next = ptr1;
            ptr1 = ptr1.next;
        } else {
            dummy.next = ptr2;
            ptr2 = ptr2.next;
        }
        dummy = dummy.next;
    }
    if (ptr1 === null) {
        dummy.next = ptr2;
    } else {
        dummy.next = ptr1;
    }
    return ans.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
