// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5

function getSum(a, b) {
  let carry
  while (a !== 0) {
    carry = a & b
    b = a ^ b
    a = carry << 1
  }
  return b
}

console.log(getSum(4, 5))
