// 86. Partition List

// Problem statement:

// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.

// Understand the problem first:

// We need to rearrange the nodes in a linked list based on a pivot value x. All nodes with values less than x should appear before nodes with values greater than or equal to x, while maintaining the original order of nodes in each partition.

// Approach and Solution:

// 1. Create two dummy nodes to represent the heads of the two partitions: one for nodes less than x and another for nodes greater than or equal to x.
// 2. Traverse the original linked list and append each node to the appropriate partition based on its value.
// 3. After processing all nodes, connect the two partitions together.
// 4. Return the head of the new partitioned list.

var partition = function (head, x) {
    // lists
    let smallList = new ListNode(-1);
    let largeList = new ListNode(-1);

    // list pointers
    let smallPointer = smallList;
    let largePointer = largeList;

    while (head != null) {
        if (head.val < x) {
            smallPointer.next = head;
            smallPointer = smallPointer.next;
        } else {
            largePointer.next = head;
            largePointer = largePointer.next;
        }
        // we will always move the head
        head = head.next;
    }
    
    // merging the lists
    smallPointer.next = largeList.next;
    largePointer.next = null;

    // returning the list
    return smallList.next;
}