// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]

// Input: root = []
// Output: []

function invertTree(root) {
  if (root) {
    ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  }
  return root
}
console.log(invertTree([4, 2, 7, 1, 3, 6, 9]))
