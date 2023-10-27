/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * @see https://leetcode.cn/problems/find-all-anagrams-in-a-string/
 */
var findAnagrams = function (s, p) {
    let need = new Map()
    let window = new Map()
    let valid = 0

    p.split('').forEach((e) => {
        if (!need.get(e)) {
            need.set(e, 1)
        } else {
            need.set(e, need.get(e) + 1)
        }
    })

    let right = 0
    let left = 0

    let res = [] //用来存储结果

    while (right < s.length) {
        let c = s[right]
        right++

        if (need.has(c)) {
            if (!window.get(c)) {
                window.set(c, 1)
            } else {
                window.set(c, window.get(c) + 1)
            }
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        while (right - left >= p.length) {
            if (valid === need.size) {
                res.push(left)
            }
            let d = s[left]
            left++
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }

    return res
}
