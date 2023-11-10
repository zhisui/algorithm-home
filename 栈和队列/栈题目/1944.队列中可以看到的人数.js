/**
 * @param {number[]} heights
 * @return {number[]}
 * @see https://leetcode.cn/problems/number-of-visible-people-in-a-queue/
 */
const canSeePersonsCount = function (heights) {

    let stack = []
    let res = []
    for (let i = heights.length - 1; i >= 0; i--) {
        let count = 0
        while (stack.length && stack[stack.length - 1] < heights[i]) {
            stack.pop()
            count++
        }
        res[i] = stack.length ? count+1 : count
        stack.push(heights[i])
    }
    return res

};
