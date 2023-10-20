/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * @see https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
 */
const twoSum = function (numbers, target) {
    // 定义两个指针left和right,因为数组是从小到大排序的，left从左边开始走，right从右边开始走，
    // 用left的所在位置的值+right所在位置的值 = 和，如果和大于目标值，说明right大了，right--
    // 如果和小了，说明left小了，left就++
    let left = 0
    let right = numbers.length - 1
    for (let i = 0; i < numbers.length; i++) {
        const sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        }
    }
};
