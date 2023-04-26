// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

function numIslands(grid) {
  let num = 0 // Number of islands

  // Helper function to perform DFS
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === '0'
    ) {
      // Check if out of bounds or water, return
      return
    }
    grid[i][j] = '0' // Mark the current cell as visited

    // Recursively perform DFS on adjacent cells (horizontally and vertically)
    dfs(i - 1, j) // Top
    dfs(i + 1, j) // Bottom
    dfs(i, j - 1) // Left
    dfs(i, j + 1) // Right
  }

  // Iterate through each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        num++ // If current cell is land, increment the number of islands
        dfs(i, j) // Perform DFS to mark all connected land cells as visited
      }
    }
  }

  return num
}
