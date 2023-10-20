/**
 * @param {string} s
 * @return {string}
 * @see https://leetcode.cn/problems/longest-palindromic-substring/
 */
const longestPalindrome = function (s) {
    // 回文字符串长度可能是奇数或者是偶数，如果是奇数的话中心点有一个，是偶数的话中心点有2个
    // 所以寻找回文子串的时候需要分别针对这两种情况去找
    let res = ''
    for (let i = 0; i < s.length; i++) {
        let res1 = getPalindrome(s, i, i)
        let res2 = getPalindrome(s, i, i + 1)
        // 更新结果,把最长的那个赋值给res
        if (res.length < res1.length) {
            res = res1
        }
        if (res.length < res2.length) {
            res = res2
        }
    }
    return res
};

const getPalindrome = (str, left, right) => {
    while (left >= 0 && right < str.length) {
        if (str[left] === str[right]) {
            left--
            right++
        } else {
            break
        }
    }
    return str.substring(left + 1, right)
}
