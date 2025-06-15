// 83. Remove Duplicates from Sorted List

// Problem statement

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Understand the problem first

// hmare pas sorted list ka head dia gia hy hum ne tmam duplicates remove krne hy aesa ke tmam elements aik mrtaba ae. Hum ne sorted list return krni hy after removal. 

// Solution

// hum do dummy aur ans ke name se varaible bnae ge aur sath me aik pointer ho ga ye ke jb kabhi linked list se aur dummy se values same hoi tu tu hum pointer ka age bashae ge aur agr unequl hoae tu hum aik node bna ke hum usko dummy ke sath attach kr de ge aur dummy ko age badha de ge.

var deleteDuplicates = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
console.log(deleteDuplicates([1, 1, 2])); // [1, 2] 
