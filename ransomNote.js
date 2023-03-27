// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function canConstruct(ransomNote, magazine) {
  const map = {}
  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i]
    map[letter] = (map[letter] || 0) + 1
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i]
    if (!map[letter]) {
      return false
    }
    map[letter]--
  }
  return true
}

console.log(canConstruct('a', 'b'), false)
console.log(canConstruct('aa', 'aab'), true)
