/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * @see https://leetcode.cn/problems/minimum-window-substring/
 */
const minWindow = function (s, t) {
    //  need是记录最小覆盖子串的， 设置一个变量valid ，当window里面的记录的每个子串达到need里面记录的子串是valid+1.否则valid-1
    // window记录窗口里面子串，它是变化的
    //
    let need = new Map()
    let window = new Map()
    let valid = 0
    // star和len记录找到最小覆盖子串的起始位置和长度
    let start = 0
    let len = Infinity

    // 获取need
    for (let i = 0; i < t.length; i++) {
        let val = t[i]
        //没有就往里面添
        if (!need.has(val)) {
            need.set(val, 1)
        } else {
            // 有的话就值+1
            need.set(val, need.get(val) + 1)
        }
    }

    let left = 0
    let right = 0
    while (right < s.length) {
        let c = s[right]
        right++
        if (need.has(c)) {
            if (!window.has(c)) {
                window.set(c, 1)
            } else {
                window.set(c, window.get(c) + 1)
            }

            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        //  缩减窗口
        while (valid === need.size) {
            // 开始缩减窗口之前先更新一下start和len
            // 找到的话先看是不是比之前的长度小，是的话就更新
            if (right - left < len) {
                start = left
                len = right - left
            }
            let k = s[left]
            left++
            // 用need.has(k) 去判断窗口数据的一系列更新，因为不属于need里面的压根不用管
            if (need.has(k)) {
                if (window.get(k) === need.get(k)) {
                    valid--
                }
                // 缩减窗口将k除开,window中记录的就少了一个
                window.set(k, window.get(k) - 1)
            }
        }
    }

    return len === Infinity ? '' : s.substr(start, len)
}
