/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @see https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
    if(head === null) {
        return head
    }
    let slow = head
    let fast = head
    while (fast !== null) {
        if (fast.val !== slow.val) {
            slow.next = fast
            slow = slow.next
        }
        fast = fast.next
    }
    // 遍历完之后可能末尾会存在有相同的值最后，要断开slow与后面相同结点的链接
    slow.next = null
    return head
};
