// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
var isAnagram = function (s, t) {
  var lenA = s.length
  var lenB = t.length
  var map = {}

  if (lenA !== lenB) return false

  for (var i = 0; i < lenA; i++) {
    if (!map[s[i]]) map[s[i]] = 0
    map[s[i]]++
  }

  for (var j = 0; j < lenB; j++) {
    if (!map[t[j]]) return false
    map[t[j]]--
  }

  return true
}

console.log(isAnagram('anagram', 'nagaram'), true)
