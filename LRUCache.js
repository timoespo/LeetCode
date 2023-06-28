// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

var List = function (key, val) {
  this.key = key
  this.val = val
  this.next = null
  this.prev = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.length = 0
  this.map = {}
  this.head = null
  this.tail = null
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  var node = this.map[key]
  if (node) {
    this.remove(node)
    this.insert(node.key, node.val)
    return node.val
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) {
    this.remove(this.map[key])
    this.insert(key, value)
  } else {
    if (this.length === this.capacity) {
      this.remove(this.head)
      this.insert(key, value)
    } else {
      this.insert(key, value)
      this.length++
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

LRUCache.prototype.remove = function (node) {
  var prev = node.prev
  var next = node.next
  if (next) next.prev = prev
  if (prev) prev.next = next
  if (this.head === node) this.head = next
  if (this.tail === node) this.tail = prev
  delete this.map[node.key]
}

LRUCache.prototype.insert = function (key, val) {
  var node = new List(key, val)
  if (!this.tail) {
    this.tail = node
    this.head = node
  } else {
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }
  this.map[key] = node
}
