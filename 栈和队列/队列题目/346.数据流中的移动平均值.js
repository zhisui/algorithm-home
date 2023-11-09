

/**
 * Initialize your data structure here.
 * @see https://leetcode.cn/problems/moving-average-from-data-stream/description/
 * @param {number} size
 */
var MovingAverage = function(size) {
    // 维护定长队列和队列中的元素和
    this.maxSize = size;
    this.queueSum = 0;
    this.q = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.q.length == this.maxSize) {
        // 给新元素腾位置
        var deletedVal = this.q.shift();
        this.queueSum -= deletedVal;
    }
    // 加入新元素
    this.q.push(val);
    this.queueSum += val;

    return this.queueSum / this.q.length;
};
