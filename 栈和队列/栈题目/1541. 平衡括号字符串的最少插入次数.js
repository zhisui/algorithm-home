/**
 * @param {string} s
 * @return {number}
 * @see https://leetcode.cn/problems/minimum-insertions-to-balance-a-parentheses-string/
 */
const minInsertions = function (s) {

    let insertTimes = 0; //插入括号的次数
    //记录右括号需要的个数，因为在遍历的过程中右括号匹配到了就会减少，匹配不到就会增加，最后如果没有全部匹配到，need会多出来,
    // 多出来的说明也是要插入的
    let rightNeed = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            rightNeed = rightNeed + 2
            // 当右括号需求量是奇数的时候，需要插入一个右括号，右括号的需求量减少一个
            if (rightNeed % 2 === 1) {
                insertTimes++
                rightNeed--
            }

        }

        if (s[i] === ')') {
            rightNeed--
            if (rightNeed === -1) {
                // 当右括号需求量为负数时，说明这时候右括号多出来一个（因为右括号是是成对的），这时候需要插入一个左括号，右括号需求量为1
                insertTimes++
                rightNeed = 1
            }
        }
    }

    return insertTimes + rightNeed

};
