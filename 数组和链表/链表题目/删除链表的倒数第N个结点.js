/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * @see https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    // 想要删除链表的倒数第N个结点，首先要先找到这个结点的前一个结点
    // 注意这里需要定义一个虚拟结点，避免链表只有一个结点的情况下能找到这个结点的前一个结点
    let dummy = new ListNode(-1)
    dummy.next = head
    const preNNode = getNNode(dummy, n + 1)
    preNNode.next = preNNode.next.next
    return dummy.next
}

const getNNode = (head, n) => {
    // 假设链表的长度为k，则k-n+1的位置就是倒数第n个结点的位置

    // 首先用p1指针去走n步， 则p1还剩n-k步就走完了，此时再用一个p2指针从第一个结点开始走，那么如果此时
    // p1和p2一起走n-k步，当p1走完了之后，p2所在的位置就是倒数第N个结点的位置
    let p1 = head
    for (i = 0; i < n; i++) {
        p1 = p1.next
    }

    let p2 = head
    while (p1 !== null) {
        p2 = p2.next
        p1 = p1.next
    }
    return p2
}
