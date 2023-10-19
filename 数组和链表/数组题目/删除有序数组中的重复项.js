/**
 * @param {number[]} nums
 * @return {number}
 * @see https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */
const removeDuplicates = function (nums) {
    if (nums.length == 0) {
        return 0
    }
    // 数组里面的索引相当于指针
    // 定义两个快慢指针，慢指针slow用来每次存储每次添加新值操作后索引值，用快指针fast去遍历数组找不同的值
    let slow = 0
    let fast = 1

    for (let i = 1; i < nums.length; i++) {
        // 快指针去找和当前慢指针不同的值，如果找到则慢指针前进一步，并将快指针找到的这个不同值赋值给慢指针
        if (nums[slow] !== nums[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow + 1
}
