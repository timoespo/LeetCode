// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

function findAnagrams(s, p) {
  const result = []
  const pCount = new Array(26).fill(0)
  const windowCount = new Array(26).fill(0)

  for (let i = 0; i < p.length; i++) {
    const charCode = p.charCodeAt(i) - 97
    pCount[charCode]++
  }
  let left = 0
  let right = 0

  while (right < s.length) {
    const charCode = s.charCodeAt(right) - 97
    windowCount[charCode]++
    if (right - left + 1 === p.length) {
      if (windowCount.every((count, index) => count === pCount[index])) {
        result.push(left)
      }
      const leftCharCode = s.charCodeAt(left) - 97
      windowCount[leftCharCode]--
      left++
    }
    right++
  }
  return result
}
