// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

function longestPalindrome(s) {
  if (s.length < 2) {
    return s
  }

  let start = 0
  let maxLength = 1

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1
      if (currentLength > maxLength) {
        maxLength = currentLength
        start = left
      }
      left--
      right++
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1)
    expandAroundCenter(i, i + 1)
  }
  return s.slice(start, start + maxLength)
}
