/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @see https://leetcode.cn/problems/reorder-list/description/
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
    const arr = []
    let p = head

    while (p !== null) {
        arr.push(p)
        p = p.next
    }

    p = head

    while (p !== null) {
        let lastNode = arr.pop()
        let next = p.next
        // next === lastNode对应结点个数为偶数的情况，lastNode.next === next对应结点个数为奇数的情况
        if (next === lastNode || lastNode.next === next) {
            lastNode.next = null
            break
        }
        p.next = lastNode
        lastNode.next = next
        p = next
    }
}
