// 1302. Deepest Leaves Sum

// Problem statement

// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Understand the problem statement

// hme binary tree ko root dia gia hy hum ne is tree ki deepest leaves ka sum up kr ke return krna hy. iske liye apko leaf node, aur tree ki height kia hoti hy ye topics ane chahie 

// Solution

// sb se pehle iski height nikale ge aur then left jaye ge right aur left right jate hoe aik aik minus krte jaye ge height me se aur then aik mtlb deepest leaves pe punch jaye ge tu hum log sum up kr ke return kr de ge

var deepestLeavesSum = function (root) {
    let sum = 0;
    function height(node) {
        if (node == null) {
            return null;
        }
        let lH = height(node.left);
        let rH = height(node.right);
        return Math.max(lH, rH) + 1;
    }

    function helper(node, height) {
        if (node == null) {
            return;
        }

        if (height === 1) {
            sum += node.val;
        }

        helper(node.left, height - 1);
        helper(node.right, height - 1);
    };
    
    let h = height(root);
    helper(root, h);
    return sum;
};