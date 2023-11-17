/**
 * 实现Promise.finally
 */

// promise结构
class Promise {
    constructor(exector) {
        function resolve() {}
        function reject() {}
        exector(resolve, reject)
    }
    then() {}
}

// 实现Promise.finally
Promise.finally = () => {
    const P = this.constructor //获取到Promise构造函数
    return this.then(
        //
        (value) => P.resolve(callback()).then(() => value),
        (error) =>
            P.reject(callback()).then(() => {
                throw error
            })
    )
}
// 实现Promise.race
Promise.race = function (arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject(new TypeError('params type error！'))
        }
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then(resolve, reject)
        }
    })
}

// 使用Promise封装一个异步加载图片的办法
function loadImg(src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
            resolve(src)
        }
        img.onerror = () => {
            reject(new Erroe('load failed'))
        }
        img.src = url
    })
}


