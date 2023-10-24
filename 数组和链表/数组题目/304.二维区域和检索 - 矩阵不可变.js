/**
 * @param {number[][]} matrix
 * @see https://leetcode.cn/problems/range-sum-query-2d-immutable/
 */
var NumMatrix = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    if (m === 0 || n === 0) return;
    // 初始化前缀和二维数组
    this.preSumArr = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0))
    for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) {
            this.preSumArr[i][j] = this.preSumArr[i - 1][j] + this.preSumArr[i][j - 1] + matrix[i - 1][j - 1] - this.preSumArr[i - 1][j - 1]
        }
    };
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */

// 计算子矩阵 [x1, y1, x2, y2] 的元素和
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    // 目标矩阵之和由四个相邻矩阵运算获得,注意题目中row和col是谁在前，谁在后
    return this.preSumArr[row2 + 1][col2 + 1] - this.preSumArr[row1][col2 + 1] - this.preSumArr[row2 + 1][col1] + this.preSumArr[row1][col1]
};
