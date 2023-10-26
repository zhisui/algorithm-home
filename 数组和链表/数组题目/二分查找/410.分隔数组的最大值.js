/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {

    // 这个题的思路和1011.在D天内运输包裹的思路是一样的，不过需要理解一下
    // 分隔成 m个数组，即是几天输送能输送完所有的包裹
    //  使得这m个子数组各自和的最大值（船的运载能力容量）最小(以最大值为横坐标，并设为x,求解关系方程f（x）)，就是说船的最低运载能力，即求二分搜索的左侧边界
    const f = (nums, x) => {
        let m = 0
        for (let i = 0; i < nums.length;) {
            let cap = x
            while (i < nums.length) {
                if (cap < nums[i]) {
                    break
                } else {
                    cap = cap - nums[i]
                }
                i++
            }
            m++
        }
        return m
    }
    // left 每个元素分成一个数组，最大值就是nums中元素的最大值
    let left = Math.max(...nums)
    let right = nums.reduce((a, b) => a + b)

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        let currentM = f(nums, mid)
        if (currentM < k) {
            right = mid - 1
        } else if (currentM > k) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
};



