// 116. Populating Next Right Pointers in Each Node

// Problem statement:

/*
You are given a binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

// Understand the problme first:

// hme aik binary tree dia hua hy aur hme hr node ke next pointer ko right node ko point krwana hy. perfect binary tree aik aese tree hota hy jaha hr node ke minimum do bache hote hy aur tmam leaf nodes aik same depth pe hoti hy jbke binary tree is me minimum zero aur maximum two ho skte hy aur leaf node same depth of tree ho bi aur nahi bi ho skti

// Approach and Solution:

// hum log simply queue ke sath level ordre traversal kre ge aur then prev ke zariye se curr node ke next pointer ko right node pe point kre ge aur hr level ke last node ko null pe point krwae ge.

class Solution {
public:
    Node* connect(Node* root) {
        
        if (root == NULL) return root;

        queue<Node*> q;
        // [1]
        q.push(root);

        // yes
        // yes
        // yes
        while (!q.empty()) {
            // 1
            // 2
            // 4
            int levelSize = q.size();
            // yaha hamesha NULL hi rahe gi value hr level ke baad
            Node* prev = NULL;
            
            // level size ke count ke jitna loop chle ga
            for (int i = 0; i < levelSize; i++) {
                // 1
                // 2
                // 3
                // 4
                // 5
                // 6
                // 7
                Node* curr = q.front();
                // []
                // [3]
                // [4, 5]
                // [5, 6, 7]
                // [6, 7]
                // [7]
                // []
                q.pop();

                // no
                // no
                // yes
                // no
                // yes
                // yes
                // yes
                if (prev != NULL) {
                    // 2.next = 3
                    // 4.next = 5
                    // 5.next = 6
                    // 6.next = 7
                    prev->next = curr;
                }
                
                // yes
                // yes
                // yes
                // no
                // no
                // no
                // no
                if (curr->left != NULL) {
                    // [2]
                    // [3, 4]
                    // [4, 6]
                    q.push(curr->left);
                }

                // yes
                // yes
                // yes
                // no
                // no
                // no
                // no
                if (curr->right != NULL) {
                    // [2, 3]
                    // [3, 4, 5]
                    // [4, 5, 6, 7]
                    q.push(curr->right);
                }

                // NULL = 1
                // NULL = 2
                // 2 = 3
                // NULL = 4
                // 4 = 5
                // 5 = 6
                // 6 = 7
                prev = curr;
            }

            // last node of every level will point to null
            if (prev != NULL) {
                // 1.next = NULL
                // 3.next = NULL
                // 7.next = NULL
                prev->next = NULL;
            }
        }

        // finally returning the root by doing chanhing in place
        return root;
    }
};