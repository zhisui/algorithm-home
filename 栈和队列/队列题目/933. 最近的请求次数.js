
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 * @see https://leetcode.cn/problems/number-of-recent-calls/
 */

var RecentCounter = function () {
    this.q = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.q.push(t)
    // t - 3000是3000ms以前的，题目要求3000ms范围内最近的请求，所以如果查过3000ms了。就把之前最开始的删掉
    while (this.q[0] < t - 3000) {
        this.q.shift()
    }
    return this.q.length
};





