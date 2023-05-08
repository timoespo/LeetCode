// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

function orangesRotting(grid) {
  const row = grid.length
  const column = grid[0].length

  const queue = []
  let freshOranges = 0
  let minutes = 0

  //find all rotten oranges
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] === 1) {
        freshOranges++
      }
    }
  }

  //Breadth First Search
  while (queue.length > 0 && freshOranges > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()
      if (x > 0 && grid[x - 1][y] === 1) {
        grid[x - 1][y] = 2
        queue.push([x - 1, y])
        freshOranges--
      }
      if (x < row - 1 && grid[x + 1][y] === 1) {
        grid[x + 1][y] = 2
        queue.push([x + 1, y])
        freshOranges--
      }
      if (y > 0 && grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2
        queue.push([x, y - 1])
        freshOranges--
      }
      if (y < column - 1 && grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2
        queue.push([x, y + 1])
        freshOranges--
      }
    }
    if (queue.length > 0) {
      minutes++
    }
  }
  return freshOranges === 0 ? minutes : -1
}
