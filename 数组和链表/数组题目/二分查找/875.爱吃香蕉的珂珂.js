/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * @see https://leetcode.cn/problems/koko-eating-bananas/
 */
var minEatingSpeed = function (piles, h) {

    // 使用二分查找的思路，将速度当做数组的索引， 数组是小时的集合，每个速度对应一个时间
    // 即是时间数组里面获取时间为h小时的索引值， 索引（速度值）最小是1， 最大为piles的最大值，
    // 或者根据提示1 <= piles[i] <= 10^9, 设为10^9, 索引（速度）是越往后面越大，则是要找到满足条件的最小索引，
    // 即确定左侧边界二分搜索

    const f = (piles, v) => {
        let hours = 0
        for (let i = 0; i < piles.length; i++) {
            //根据某一个速度求取吃掉所有香蕉所需要的的时间
            hours += Math.floor(piles[i] / v)
            //    如果除不尽，剩下的还需要用一个小时来吃
            if (piles[i] % v !== 0) {
                hours++
            }
        }
        return hours
    }


    let left = 1
    let right = 1e9
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        let hours = f(piles, mid)
        if (hours < h) {
            // 注意这里因为速度（索引）越大，所需的时间越小，所以是降序的，当mid对应的值小于目标值的时候，应该收缩右侧边界
            right = mid - 1
        } else if (hours > h) {
            left = mid + 1
        } else if (hours === h) {
            // 收缩右侧边界
            right = mid - 1
        }
    }

    if (left < 1 || left > 1e9 + 1) {
        return -1
    }

    return left

};
