/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @see https://leetcode.cn/problems/move-zeroes/
 */
const moveZeroes = (nums) => {
    let slow = 0
    let fast = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }

    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums

};
