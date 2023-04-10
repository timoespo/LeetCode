// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

function initializeQueueAndNewMatrix(mat) {
  let queue = []
  let newMat = new Array(mat.length)
  for (let row = 0; row < mat.length; row++) {
    newMat[row] = new Array(mat[row].length)
    for (let col = 0; col < mat[row].length; col++) {
      if (mat[row][col] === 0) {
        queue.push([row, col])
        newMat[row][col] = 0
      } else {
        newMat[row][col] = Number.POSITIVE_INFINITY
      }
    }
  }
  return [queue, newMat]
}
function isValidPos(row, col, mat, newMat, currDistance) {
  return (
    row > -1 &&
    row < mat.length &&
    col > -1 &&
    col < mat[row].length &&
    currDistance < newMat[row][col]
  )
}
function updateMatrix(mat) {
  let [queue, newMat] = initializeQueueAndNewMatrix(mat)
  let travelPos = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ]
  let distance = 1
  while (queue.length !== 0) {
    let currentQueueSize = queue.length
    for (let i = 0; i < currentQueueSize; i++) {
      let [currRow, currCol] = queue.shift()
      for (let [moveRow, moveCol] of travelPos) {
        moveRow = currRow + moveRow
        moveCol = currCol + moveCol
        if (isValidPos(moveRow, moveCol, mat, newMat, distance)) {
          newMat[moveRow][moveCol] = distance
          queue.push([moveRow, moveCol])
        }
      }
    }
    distance++
  }
  return newMat
}
