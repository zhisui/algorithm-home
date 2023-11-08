/**
 * @param {string} s
 * @return {number}
 * @see https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/description/
 */
const minAddToMakeValid = function (s) {

    let leftNeed = 0
    let rightNeed = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            rightNeed++
        }
        if (s[i] === ')') {
            rightNeed--
        }
        // 说明这里需要添加右括号
        if (rightNeed === -1) {
            rightNeed = 0
            leftNeed++
        }
    }

    return rightNeed + leftNeed

};
