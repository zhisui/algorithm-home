/*
1.调用call的函数this指向到了call的第一个参数
2. call函数的第一个参数是要绑定的对象，其余参数是参数列表
3.函数丙丁call之后会立即执行

改变this的原理,将调用函数作为obj的一个属性，name在这个调用函数里面就可以使用obj的this

const obj = {
    a:1;
    fn: function(params) {
        console.log(this.a) //this指向了obj
        console.log(params, '传入的参数')
    }
}

 function fn (params) {
        console.log(this.a) //this指向了obj
        console.log(params, '传入的参数')
    }

 fn.call(obj,1)

*/
// 实现一个apply函数
// context在没有传参的时候默是window
Function.prototype.apply = function (context = window, arg) {
    // 这里的this指向调用apply的那个函数
    if (typeof this !== 'function') {
        throw new TypeError('类型错误，调用者必须是一个函数')
    }

    const fn = Symbol() //保证键的唯一性
    context[fn] = this //将调用函数作为this新指向context的一个属性
    const res = context[fn](...arg) //执行调用函数,arg是数组
    context[fn]
    return res
}

// 实现一个call函数
// call的时候传入参数用剩余参数表示
Function.prototype.call = function (context = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error')
    }
    const fn = Symbol('fn')
    context[fn] = this
    // ...arg表示剩余参数，arg本身是个数组
    const res = context[fn](...args)
    delete context[fn]
    return res
}

/**
 @desc  实现bind函数
bind 函数并不是立即执行的，它返回的是一个构造函数
 */
Function.prototype.bind = function (context, ...arg) {
    if (typeof this !== 'function') {
        throw new TypeError('类型错误')
    }

    let self = this //this就是调用bind的那个函数

    return function Fn() {
        // const Test = fn.bind(); test = new Test() 的情况，这里需要搞清楚new操作符做了什么，理解了才会明白为什么用this instanceof 去判断
        // 这里的this实际上就是指向test，test是Test的一个实例，而Test是bind绑定后的返回构造函数
        if (this instanceof Fn) {
            return new self(...args, ...arguments)
        } else {
            return self.call(context,...args, ...arguments)
        }
    }
}


try {

} catch (error) {

} .finally (() => {
    console.log('hello')
})
