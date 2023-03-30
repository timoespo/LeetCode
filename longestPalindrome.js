// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

function longestPalindrome(s) {
  let charCount = {}
  let oddCount = 0
  let longest = 0

  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]]) {
      charCount[s[i]]++
    } else {
      charCount[s[i]] = 1
    }
  }
  for (let char in charCount) {
    if (charCount[char] % 2 === 1) {
      oddCount++
    }
    longest += Math.floor(charCount[char] / 2) * 2
  }
  return oddCount > 0 ? longest + 1 : longest
}

console.log(longestPalindrome('abccccdd'), 7)
