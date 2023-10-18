/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * @see https://leetcode.cn/problems/middle-of-the-linked-list/
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
    // 定义两个快慢指针，快指针每次走2步，慢指针每次走1步，
    // 当快指针走完了之后，慢指针就恰好在中间位置
    let slow = head
    let fast = head
    // 遍历fast直到走完最后一个
    while (fast!== null && fast.next!== null){
        fast = fast.next.next
        slow = slow.next
    }
     return slow
};
