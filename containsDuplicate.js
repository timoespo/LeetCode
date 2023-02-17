// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicates(nums) {
  const present = new Set()
  for (const num of nums) {
    if (present.has(num)) {
      return true
    }
    present.add(num)
  }
  return false
}

console.log(containsDuplicates([1, 2, 3, 1]), true)
console.log(containsDuplicates([1, 2, 3, 4]), false)
console.log(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)
