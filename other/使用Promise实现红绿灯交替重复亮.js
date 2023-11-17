// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？

function red() {
    console.log("red");
  }
  function green() {
    console.log("green");
  }
  function yellow() {
    console.log("yellow");
  }
  const light = function (timer, cb) {
    return new Promise(resolve => {
      setTimeout(() => {
        cb()
        resolve()
      }, timer)
    })
  }
  const step = function () {

    const arr = [{time: 3000, func: red}, {time: 2000, func: yellow}, {time: 1000, func: green}]


    Promise.resolve().then(() => {
      return light(3000, red)
    }).then(() => {
      return light(2000, green)
    }).then(() => {
      return light(1000, yellow)
    }).then(() => {
    //   return step()
    })
  }

  step()


