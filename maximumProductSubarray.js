// Given an integer array nums, find a
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maxProduct(nums) {
  let maxSoFar = nums[0]
  let minSoFar = nums[0]
  let maxProduct = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const prevMaxSoFar = maxSoFar
    maxSoFar = Math.max(num, Math.max(maxSoFar * num, minSoFar * num))
    minSoFar = Math.min(num, Math.min(prevMaxSoFar * num, minSoFar * num))
    maxProduct = Math.max(maxProduct, maxSoFar)
  }
  return maxProduct
}

console.log(maxProduct([2, 3, -2, 4]), 6)
console.log(maxProduct([-2, 0, -1]), 0)
