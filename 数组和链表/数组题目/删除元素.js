/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @see https://leetcode.cn/problems/remove-element/
 */
const removeElement = function (nums, val) {
    let slow = 0
    let fast = 0

    for (i = 0; i < nums.length; i++) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }

    return slow
};
