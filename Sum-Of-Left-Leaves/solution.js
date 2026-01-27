// 404. Sum of Left Leaves

// Problem statement:

// Find the sum of all left leaf leaves in a given binary tree. A leaf is a node with no children. A left leaf is a leaf that is the left child of its parent.

// Understand the problem first:

// hme aik binary tree di hui hai aur hme usme se left leaves ka sum nikalna hai. Left leaf wo node hoti hai jo apne parent ki left child hoti hai aur jiska koi child nahi hota.

// Approach and Solution:

// hum is me depth first search (DFS) ka use karenge. Hum har node ko check karenge ki kya wo left leaf hai ya nahi. Agar wo left leaf hai to uska value sum me add karenge. Agar wo leaf nahi hai to hum uske left aur right children ko recursively check karenge.

var sumOfLeftLeaves = function (root) {
    let sum = 0;

    function dfs(node) {
        if (node === null) return 0;

        // we have to add only left leaf nodes not just left nodes
        if (
            node.left &&
            !node.left.left &&
            !node.left.right
        ) {
            sum += node.left.val;
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return sum;
};

