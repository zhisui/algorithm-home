/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []

    tokens.forEach((item) => {
        // 是运算符的话就将栈顶两个元素放出来做运算，结果存放在栈顶
        if ('+-*/'.indexOf(item) !== -1) {
            let a = stack.shift()
            let b = stack.shift()
            let res = 0
            // 计算并取余

            switch (item) {
                case '+':
                    res = Number(b) + Number(a)
                    break
                case '-':
                    res = b - a
                    break
                case '*':
                    res = b * a
                    break
                case '/':
                    res = (b / a) | 0 //这里取下整
                    break
            }
            stack.unshift(res)
        } else {
            // 不是就入栈
            stack.unshift(item)
        }
    })
    return stack[0]
}
