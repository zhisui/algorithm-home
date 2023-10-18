/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * @see https://leetcode.cn/problems/merge-two-sorted-lists/
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode(-1)
    //  p用来存储最后的结果
    let p = dummy
    //  定义两个指针分别指向list1和list2的头结点，这两个指针是用来遍历两个链表
    let p1 = list1
    let p2 = list2

    //  因为是链表，不知道具体的长度，所以用while循环来遍历
    while (p1 !== null && p2 !== null) {
        //比较当前p1和p2的值，哪一个小就把p指向哪一个
        if (p1.val < p2.val) {
            p.next = p1
            p1 = p1.next
        } else {
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }

    //p1和p2指向的链表有一个循环结束之后，需要把p连到另外一个还没有循环结束的链表
    if (p1 !== null) {
        p.next = p1
    }
    if (p2 !== null) {
        p.next = p2
    }
    return dummy.next
}
