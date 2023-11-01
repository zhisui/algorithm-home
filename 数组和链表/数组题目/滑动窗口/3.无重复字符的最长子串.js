/**
 * @param {string} s
 * @return {number}
 * @see https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */
const lengthOfLongestSubstring = function (s) {
    let window = new Map()
    let res = 0

    let right = 0
    let left = 0
    while (right < s.length) {
        let val = s[right]
        right++
        if (!window.get(val)) {
            window.set(val, 1)
        } else {
            window.set(val, window.get(val) + 1)
        }

        while (window.get(val) > 1) {
            //    收缩左侧窗口
            let d = s[left]
            left++
            // 重复了就删除第一个，直到不重复为止，right才继续往后面走
            window.set(d, window.get(d) - 1)
        }
        res = Math.max(res, right - left)
    }

    return res
}
