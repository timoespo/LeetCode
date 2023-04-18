// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
function canFinish(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0)
  for (const pre of prerequisites) {
    inDegree[pre[0]]++
  }
  const zeroDegree = []
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      zeroDegree.push(i)
    }
  }
  if (zeroDegree.length === 0) return false

  while (zeroDegree.length) {
    const course = zeroDegree.pop()
    for (const pre of prerequisites) {
      if (course === pre[1]) {
        inDegree[pre[0]]--
        if (inDegree[pre[0]] === 0) {
          zeroDegree.push(pre[0])
        }
      }
    }
  }
  for (const num of inDegree) {
    if (num !== 0) return false
  }
  return true
}
