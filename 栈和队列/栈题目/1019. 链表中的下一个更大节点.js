/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const nextLargerNodes = function (head) {
    // 用来存储最后的结果

    //将链表转化成数组
    let arr = []
    // 新建一个栈，用来比较当前的值是不是最大的，如果不是就出栈
    let stack = []

    for (let p = head; p !== null; p = p.next) {
        arr.push(p.val)
    }
    let res = new Array(arr.length).fill(0)

    //对栈进行操作,for 循环要从后往前扫描元素，因为我们借助的是栈的结构，倒着入栈，其实是正着出栈
    for (let i = arr.length - 1; i >= 0; i--) {
        // 当进栈的元素大于栈顶元素时，栈顶元素出栈,这个地方就在找比较找值了
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop()
        }
        res[i] = stack.length ? stack[stack.length - 1] : 0
        stack.push(arr[i])
    }
    return res
}
