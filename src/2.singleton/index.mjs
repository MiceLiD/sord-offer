// 题目：
// 设计一个类，我们只能生产该类的一个实例
// JavaScript运行在单线程环境，所以无需考虑多线程问题
// 三种实现方式：闭包、类、模块化

export class Singleton {
  name = 'singleton'
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance
    }
    Singleton.instance = this
    return this
  }
}