// 82. Remove Duplicates from Sorted List II

// Problem statement

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Understand the problem first

// hme aik sorted linked list di hui hai jisme kuch nodes duplicate ho sakti hain. Humein aise nodes ko remove karna hai jisme duplicate values hain, aur sirf unique values wali nodes ko hi retain karna hai. Final linked list bhi sorted honi chahiye.

// Solution and Approach

// dummy node ka use karenge taake head ko easily manage kar sakein. Do pointers use karenge: ek prev jo last unique node ko point karega, aur ek curr jo current node ko point karega. Jab bhi duplicate values milengi, unhe skip kar denge aur prev ko update karenge taake woh next unique node ko point kare. Agar current node unique hai, toh prev ko aage badha denge. Finally, dummy.next return karenge jo updated linked list ka head hoga.

var deleteDuplicates = function (head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while (curr != null) {
        if (curr.next != null && curr.val == curr.next.val) {
            // Skip all duplicates
            while (curr.next != null && curr.val == curr.next.val) {
                curr = curr.next;
            }
            // Link prev to the node after duplicates
            prev.next = curr.next;
        } else {
            // Move prev only when no duplicates found
            prev = prev.next;
        }
        // Always move curr
        curr = curr.next;
    }

    return dummy.next;
};