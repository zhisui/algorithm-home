/**
 * @param {string} s
 * @return {boolean}
 * @see https://leetcode.cn/problems/valid-parentheses/
 */
const isValid = function (s) {
    let obj = {
        '}': "{",
        ')': "(",
        ']': "[",
    }
    let left = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            left.push(s[i])
        } else {
            if (obj[s[i]] !== left.pop()) {
                return false
            }
        }
    }
    return left.length === 0
};
