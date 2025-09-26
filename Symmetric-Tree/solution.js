// 101. Symmetric Tree

// Problem statement

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Understand the problem first

// hme binary tree ka root dia gia hy hum ne check krna hy ke wo apna mirror hy ya nahi apne center per

// Solution

// recursion plus tree ke left ka right aur tree ke right ka right de ge aur then comaprison kre ge aur bilkul is trah hum check kr le ge ke agr symmetric hy tu true warna false return krna hy

var isSymmetric = function (root) {
    if (root == null) {
        return true;
    }
    function check(root1, root2) {
        if (root1 == null && root2 === null) {
            return true;
            // return root1 == root2;
        }
        if (root1 == null || root2 == null) {
            return false;
        }
        if (root1.val === root2.val) {
            let left = check(root1.left, root2.right);
            let right = check(root1.right, root2.left);
            return left && right;
        } else {
            return false;
        }
    }
    return check(root.left, root.right);
};
