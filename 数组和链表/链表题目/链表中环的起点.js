/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * @see https://leetcode.cn/problems/linked-list-cycle-ii/
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 先判断这个链表是否有环
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) {
            break
        }
    }

    if (fast === null || fast.next === null) {
        //  说明不成环
        return null
    }

    // fast每次走2k步，slow走k步, 则相遇的时候fast比slow一定是多走了k步
    // 设相遇点到环起点的距离为m
    // slow 走k步的时候相遇，则头结点到相遇点的距离为k,头结点到环起点的距离就是k-m
    // k是环的整数倍，这里假设是1倍，则fast再向前走k-m步就可以到达环起点

    // 将slow重新指向头结点，slow和fast同时走，当slow和fast相等时就是环的起点
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};
