// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

function subset(nums) {
  const result = []

  function backtrack(startIndex, currentSubset) {
    result.push(currentSubset.slice())

    for (let i = startIndex; i < nums.length; i++) {
      currentSubset.push(nums[i])
      backtrack(i + 1, currentSubset)
      currentSubset.pop()
    }
  }

  backtrack(0, [])
  return result
}
