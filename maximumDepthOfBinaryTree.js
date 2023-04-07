// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
function maxDepth(root) {
  let depth = 0
  depthTraverse(root)
  function depthTraverse(root, nodeDepth = 1) {
    if (!root) {
      return
    }
    if (nodeDepth > depth) {
      depth = nodeDepth
    }
    depthTraverse(root.left, nodeDepth + 1)
    depthTraverse(root.right, nodeDepth + 1)
  }
  return depth
}
