// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s) {
  let max = 0
  let start = 0
  let chars = new Map()

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)

    if (chars.has(char) && chars.get(char) >= start) {
      start = chars.get(char) + 1
    }
    chars.set(char, i)
    max = Math.max(max, i - start + 1)
  }
  return max
}
