// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf(nums) {
  const n = nums.length
  const prefixProducts = new Array(n).fill(1)
  const suffixProducts = new Array(n).fill(1)
  const answer = new Array(n)

  for (let i = 1; i < n; i++) {
    prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
    suffixProducts[i] = suffixProducts[i + 1] * nums[i + 1]
  }
  for (let i = 0; i < n; i++) {
    answer[i] = prefixProducts[i] * suffixProducts[i]
  }
  return answer
}

console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])
console.log(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0])
