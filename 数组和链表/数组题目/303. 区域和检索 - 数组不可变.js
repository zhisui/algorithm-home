/**
 * @param {number[]} nums
 * @see https://leetcode.cn/problems/range-sum-query-immutable/
 * 前缀和理解 @see https://blog.csdn.net/qq_45914558/article/details/107385862
 */

var NumArray = function (nums) {
    this.newArr = new Array(nums.length + 1)
    this.newArr[0] = 0
    for (let i = 1; i < this.newArr.length; i++) {
        this.newArr[i] = this.newArr[i - 1] + nums[i - 1]
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    // s表示从0到某个index的数值累计和，a表示每一项的值
    // s[l-1] = a1 + a2 + a3 + ...a[l-1]
    // s[r] = a1 + a2 + a3 + ...a[l-1]+ a[l]+ ...+ a[r]
    // 想要求lfet到right的累计和，则是计算a[l]+ ...+ a[r]，
    // 而s[r] - s[l-1] = a[l]+ ...+ a[right],所以可以直接用s[r] - s[l-1]求得
    // 为方便边界处理（特别是在处理二维数组的时候），所以将前缀和数组的第一个数初始化为0，故s前缀和数组的长度比原数组多一个，故最后为s[r+1] - s[l]
    return this.newArr[right + 1] - this.newArr[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
