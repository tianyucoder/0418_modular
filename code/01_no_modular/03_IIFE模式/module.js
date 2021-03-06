/**
 * IIFE模式: 匿名函数自调用(闭包)
 * IIFE : immediately-invoked function expression(立即调用函数表达式)
 * 作用: 数据是私有的, 外部只能通过暴露的方法操作
 * 问题: 如果当前这个模块依赖另一个模块怎么办?
 */

((a)=> {

  //数据
  let data = 'atguigu'

  //操作数据的函数
  function foo() {
    console.log(`我是foo函数---${data}`)
  }

  //操作数据的函数
  function bar() {
    console.log(`我是bar函数---${data}`)
  }

  a.myModule1 = {foo,bar}

})(window)

