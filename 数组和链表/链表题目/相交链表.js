/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * @see https://leetcode.cn/problems/intersection-of-two-linked-lists/
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //如果两个链表相交，那么相交点之后的结点都是一样的
    // 假设链表A和链表B从头结点到相交结点的距离分别为a和b,相交点之后的距离设为c
    // 那么对于A链表来说，从头结点->相交点->尾结点的距离为 a+c， B链表为b+c，则利用(a+c)+b = (b+c)+a （值即为交点，为null不相交）条件即可证明两条链表相交
    let p1 = headA
    let p2 = headB
    while (p1 !== p2) {
        // 链表A遍历完之后遍历链表B
        if (p1 !== null) {
            p1 = p1.next
        } else {
            p1 = headB
        }
        // 链表B遍历完之后遍历链表A
        if (p2 !== null) {
            p2 = p2.next
        } else {
            p2 = headA
        }
    }
    return p1 ? p1 : null
}
