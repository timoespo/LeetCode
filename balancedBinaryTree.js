// Given a binary tree, determine if it is
// height-balanced.

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

function isBalanced(root) {
  if (!root) {
    return true
  }
  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
}

function getHeight(node) {
  if (!node) {
    return 0
  }
  const leftHeight = getHeight(node.left)
  const rightHeight = getHeight(node.right)
  return 1 + Math.max(leftHeight, rightHeight)
}
