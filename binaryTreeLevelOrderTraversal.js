// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

function levelOrder(root) {
  if (!root) return []
  const queue = []
  const output = []
  queue.push(root)

  while (queue.length) {
    const length = queue.length
    const row = []
    for (let i = 0; i < length; i++) {
      const cur = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
      row.push(cur.val)
    }
    output.push(row)
  }
  return output
}
