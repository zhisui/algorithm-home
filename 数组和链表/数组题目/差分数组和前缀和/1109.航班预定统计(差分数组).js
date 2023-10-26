/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 * @see https://leetcode.cn/problems/corporate-flight-bookings/
 */
var corpFlightBookings = function (bookings, n) {
    const nums = new Array(n).fill(0)
    const diff = new Diff(nums)
    for (let i = 0; i < bookings.length; i++) {
        diff.increment(bookings[i][0] - 1, bookings[i][1] - 1, bookings[i][2])
    }
    return diff.result()
}

class Diff {
    diff = []
    constructor(nums) {
        this.nums = nums
        // 构建差分数组
        if (this.nums.length) {
            this.diff = new Array(this.nums.length).fill(0)
            this.diff[0] = this.nums[0]
            for (let i = 1; i < this.nums.length; i++) {
                this.diff[i] = this.nums[i] - this.nums[i - 1]
            }
        }
    }

    // 对差分数组区间[i,j]范围内的每一项元素进行操作，假设是对[i,j]每一项都加上一个数3，那么对于原数组来说来说，第i项
    // 的值会比i-1项多3项，相应的第i项的差分数组会多3,而对于j项和j+1项，j+1项会比j项少k,相应的差分数组第j+1项会少3
    // 而这i+1到j项对应的差分数组没有发生变化（差分数组是当前减去上一个的差，而在[i+1,j]这里因为每次都加3，所以操作后这段的差分并不会发生改变）

    increment(i, j, val) {
        //val可能是负数，但不管正负都是成立的
        this.diff[i] += val
        if (j + 1 < this.nums.length) {
            this.diff[j + 1] -= val
        }
    }

    // 操作完成之后将等差数组还原成原来的数组
    result() {
        let res = new Array(this.nums.length)
        res[0] = this.diff[0]
        for (let i = 1; i < this.nums.length; i++) {
            res[i] = res[i - 1] + this.diff[i]
        }
        return res
    }
}
