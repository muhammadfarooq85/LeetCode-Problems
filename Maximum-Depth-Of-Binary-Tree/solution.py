# 104. Maximum Depth of Binary Tree

# Problem statement

# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Understand the problem first

# hmare pas aik binary tree ka root dia hoa hy hum ne uski maximum depth nikalni hy. // maximum depth apki root node se le ke longest path ko follow krti hoi fartyhest leafnode tk hoti hy.

# Solution

# Hum isko python me solve kre ge. Sb se pehle hum aik edge case ka dihan rakhe ge ke agr tree hy hi empty tu depth zero hy. then hum deqeue ko import kre ge collections se. Ye pythob ke library se aea hy. then hum level by level ja ke nodes ko append kre ge qeue me aur then level ko return kre ge. Aur sath me level ko increment kre ge. Baqi isme me mje bi confusion ho rahi hy.

from collections import deque

# Tree creating
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth (root):
    
    # edge case
    if root is None:
        return 0

    # initializing qeue by inserting the root
    nodes = deque([root])
    # depth ko count krne ke liye
    levels  = 0

    while nodes:
        levels += 1
        # keep tracking of number of the nodes at current level 
        size = len(nodes)

        for _ in range(size):
            # popping top most from the qeue
            node = nodes.popleft()
            if node.left:
                nodes.append(node.left)
            if (node.right):
                nodes.append(node.right)
    return levels

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

print(maxDepth(root))  # Output: 3