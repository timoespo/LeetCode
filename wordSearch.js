// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

function exist(board, word) {
  const m = board.length
  const n = board[0].length

  function backtrack(i, j, index) {
    if (index === word.length) {
      return true
    }
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
      return false
    }
    const originalChar = board[i][j]
    board[i][j] = '#'

    const found =
      backtrack(i - 1, j, index + 1) ||
      backtrack(i + 1, j, index + 1) ||
      backtrack(i, j - 1, index + 1) ||
      backtrack(i, j + 1, index + 1)

    board[i][j] = originalChar
    return found
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i, j, 0)) {
        return true
      }
    }
  }

  return false
}
