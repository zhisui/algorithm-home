/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 * @see https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/
 */
var shipWithinDays = function (weights, days) {

    // 用二分搜索的求左侧边界的思想去解决这个问题，每一个运载能力对应一个天数，这里求给定天数，然后返回一个运载能力，
    // 所以可以运载能力（索引）去找这个天数

    // 根据所有的货物和运载能力去计算所需天数，运载能力设为x
    const f = (weights, x) => {
        let days = 0

        for (let i = 0; i < weights.length;) {
            let cap = x //每一次运输都是按照运载能力来算的
            while (i < weights.length) {
                // 要装的货物超过了运载限制，装不下了，说明得留到到下一天装，退出循环
                // 这里题目说了装载的重量不会超过船的最大运载重量，所以不会第i个包裹大于船容量的情况
                if (cap < weights[i]) {
                    break
                } else {
                    // 如果装完第i个货物之后还有剩余，计算剩余的船容量，继续看下一个能不能装
                    cap = cap - weights[i]
                }
                // i++ 写在while循环里面， 是因为如果船还可以可以装下一个，要继续把下一个装进去
                i++
            }
            days++
        }

        return days
    }

    //最小载重应该是 weights 数组中元素的最大值，因为每次至少得装一件货物走，不能说装不下。
    // 最大载重能力应该是weights中的所有的元素和，就是说一次全部运完

    let left = Math.max(...weights)
    let right = weights.reduce((a, b) => a + b)

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        let currentDay = f(weights, mid)
        if (currentDay < days) {
            // 运载能力越大，则所需的时间越短，所以当mid载货能力求得的天数比days小的时候，应该缩小右侧边界
            right = mid - 1
        } else if (currentDay > days) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left

};
