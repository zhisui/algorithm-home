/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * @see https://leetcode.cn/problems/partition-list/submissions/475130724/
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

const partition = (head, x) => {
    // dummy虚拟结点主要是方便结果链表之间的；连接
    let dummy1 = new ListNode(-1)
    let dummy2 = new ListNode(-1)
    // 用p1结点来存储一个比x小的链表， p2用来存储比x大的链接
    let p1 = dummy1
    let p2 = dummy2
    // 将p指针指向待分隔链表的头结点, 用p遍历分隔链表，比较当前p和x的值，如果p的值比x小，则将p1指向p,p1向前走一步，
    // 反之p的值比x的值要大，则将p2指向p,p2向前走一步
    let p = head
    while (p !== null) {
        if (p.val < x) {
            p1.next = p
            p1 = p1.next
        } else {
            p2.next = p
            p2 = p2.next
        }

        // 因为在这里直接对分隔链表进行操作，而不是通过new ListNode()生成一个新的结点去一个一个得到生成的链表，
        // 所以避免最后的结果会生成环，在遍历分隔链表的时候需要将p结点后面的结点分隔开，将next断掉

        const temp = p.next //获取p后面的结点
        p.next = null //将p与后面的结点断开
        p = temp //p再从后面的结点开始
    }

    // 遍历完成后，将p1和p2连成最终链表
    p1.next = dummy2.next
    return dummy1.next
}
