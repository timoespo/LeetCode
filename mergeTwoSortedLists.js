// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

function mergeTwoLists(list1, list2) {
  // initialize new linked list
  let head = new ListNode(null)

  // new pointer
  let current = head

  // loop while both lists are not null (did not reach end)
  while (list1 && list2) {
    // check which val is lower and point current to it
    // move the pointer on the lower list
    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }

    // move the current pointer
    current = current.next
  }

  // determine which node is not null
  let remaining = list1 || list2

  // set current to the remaining list
  current.next = remaining

  // return next because head was initialized to null
  return head.next
}
