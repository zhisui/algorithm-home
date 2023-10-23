/**
 * @param {number[]} nums
 * @see https://leetcode.cn/problems/range-sum-query-immutable/
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

    return this.newArr[right + 1] - this.newArr[left]

};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
