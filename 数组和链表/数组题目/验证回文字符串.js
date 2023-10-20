/**
 * @param {string} s
 * @return {boolean}
 * @see https://leetcode.cn/problems/valid-palindrome/
 */
const isPalindrome = function (s) {
    const str = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    let left = 0
    let right = str.length - 1
    while (left <= right) {
        if (str[left] === str[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
};
