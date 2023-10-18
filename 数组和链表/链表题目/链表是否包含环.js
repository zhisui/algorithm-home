/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * @see https://leetcode.cn/problems/linked-list-cycle/
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 定义两个快慢指针， 快指针每次走两步，慢指针每次走一步，因为它两速度不一样，如果链表中有环，则它两一定会相遇
    let fast = head
    let slow = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
}
