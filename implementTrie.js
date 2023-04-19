// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

class TrieNode {
  constructor() {
    this.children = new Map()
    this.isEndOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    let currentNode = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode())
      }
      currentNode = currentNode.children.get(char)
    }
    currentNode.isEndOfWord = true
  }
  search(word) {
    let currentNode = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!currentNode.children.has(char)) {
        return flase
      }
      currentNode = currentNode.children.get(char)
    }
    return currentNode.isEndOfWord
  }
  startWith(prefix) {
    let currentNode = this.root
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i]
      if (!currentNode.children.has(char)) {
        return false
      }
      currentNode = currentNode.children.get(char)
    }
    return true
  }
}
