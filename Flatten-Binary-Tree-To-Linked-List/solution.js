// 94. Flatten Binary Tree to Linked List

// Problem statement

// Given the root of a binary tree, flatten the tree into a "linked list":
// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Understand the problem first

// hme aik binary tree di gai hai aur hme usko is tarah se modify karna hai ke wo ek linked list ban jaye jismein har node ka right pointer next node ko point kare aur left pointer null ho. Ye linked list pre-order traversal ke order mein honi chahiye.

// Approach and Solution

// hum stack based approach use karenge jismein hum pre-order traversal karte hue nodes ko stack mein push karenge aur phir unko pop karke linked list banayenge.

var flatten = function(root) {
    if (!root) return null;
    
    let stack = [];
    let dummy = new TreeNode(0);
    let prev = dummy;
    
    stack.push(root);
    
    while (stack.length > 0) {
        let node = stack.pop();
        
        // Add right then left to stack
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
        
        // Build the linked list
        prev.right = node;
        prev.left = null;
        prev = node;
    }
    
    // Ensure the last node's left is null
    prev.left = null;
    prev.right = null;
    
    return dummy.right;
};