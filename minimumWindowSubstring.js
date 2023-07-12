// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

function minWindowSubstring(s, t) {
  let map = {}
  let counter = t.length
  let left = 0
  let right = 0
  let minLength = Infinity
  let minWindow = ''

  for (let char of t) {
    map[char] = map[char] ? map[char] + 1 : 1
  }

  while (right < s.length) {
    if (map[s[right]] > 0) {
      counter--
    }
    map[s[right]] = map[s[right]] ? map[s[right]] - 1 : -1
    right++

    while (counter === 0) {
      if (right - left < minLength) {
        minLength = right - left
        minWindow = s.substring(left, right)
      }
      if (map[s[left]] === 0) {
        counter++
      }
      map[s[left]] = map[s[left]] ? map[s[left]] + 1 : 1
      left++
    }
  }
  return minWindow
}
