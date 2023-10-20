/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see https://leetcode.cn/problems/3sum/
 */
var threeSum = function (nums) {
    let res = []
    const sortNums = nums.sort((a, b) => a - b)
    for (let i = 0; i < sortNums.length - 1; i++) {
        const towSum = 0 - sortNums[i]
        // 要从剩下的里面找，所以找i+1及后面的元素
        const toSumArr = getTowSum(i + 1, sortNums, towSum)
        if (toSumArr.length) {
            for (let j = 0; j < toSumArr.length; j++) {
                toSumArr[j] = [sortNums[i], ...toSumArr[j]]
                res.push(toSumArr[j])
            }
        }
        // 这个循环是保证第一个数不会重复
        while (i < sortNums.length && nums[i] === nums[i + 1]) {
            i++
        }
    }
    return res
};

const getTowSum = (start, nums, target) => {
    let right = nums.length - 1
    let left = start
    let res = [] //结果可能用多个
    while (left < right) {
        const sum = nums[right] + nums[left]
        if (sum < target) {
            // 这里跳过重复的值，保证得到的结果不会是重复的
            while (left < right && nums[left] === nums[left + 1]) {
                left++
            }
            left++
        } else if (sum > target) {
            while (left < right && nums[right] === nums[right - 1]) {
                right--
            }
            right--
        } else if (sum === target) {
            res.push([nums[left], nums[right]])
            // 这里要继续操作左右指针往前走，重复的元素就跳过，
            while (left < right && nums[right] === nums[right - 1]) {
                right--
            }
            while (left < right && nums[left] === nums[left + 1]) {
                left++
            }
            left++
            right--
        }
    }

    return res

}
