/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    // 用滑动窗口的思路来做

    let need = new Map()
    let window = new Map()
    let valid = 0

    s1.split('').forEach((e) => {
        if (!need.get(e)) {
            need.set(e, 1)
        } else {
            need.set(e, need.get(e) + 1)
        }
    })

    let right = 0
    let left = 0

    while (right < s2.length) {
        let c = s2[right]
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
        while (right - left >= s1.length) {
            if (valid === need.size) {
                return true
            }
            let d = s2[left]
            left++
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }

    return false
}
