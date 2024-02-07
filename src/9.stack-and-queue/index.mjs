import { Stack } from '../../lib/stack.mjs'
import { Queue } from '../../lib/queue.mjs'
/**
 * 题目:
 * 用两个栈实现一个队列。
 * 队列的声明如下，请实现它的两个函数appendTail和deleteHead，
 * 分别完成在队列尾部插入节点和在队列头部删除节点的功能。
 */
export class StackWithQueue {
  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }

  appendTail(element) {
    this.stack1.enStack(element)
  }

  deleteHead() {
    const { stack1, stack2 } = this

    if (stack1.isEmpty() && stack2.isEmpty()) {
      throw new Error('The Stack is empty')
    }

    if (!stack2.isEmpty()) {
      return stack2.deStack()
    }

    while (stack1.size()) {
      const el = stack1.deStack()
      stack2.enStack(el)
    }

    return stack2.deStack()
  }

  toString() {
    const { stack1, stack2 } = this

    if (stack1.isEmpty() && stack2.isEmpty()) {
      return ''
    }

    if (stack2.isEmpty()) {
      return stack1.toString()
    }
    if (stack1.isEmpty()) {
      return stack2.toString(true)
    }
    return `${stack2.toString(true)},${stack1.toString()}`
  }
}


/**
 * 题目:
 * 用两个队列实现一个栈。
 * 栈的声明如下，请实现它的两个函数push和pop，
 * 分别完成在入栈和出栈操作。
 */
export class QueueWithStack {
  constructor() {
    this.queue1 = new Queue()
    this.queue2 = new Queue()
  }

  push(element) {
    this.queue1.enQueue(element)
  }

  pop() {
    const { queue1, queue2 } = this

    if (queue1.isEmpty() && queue2.isEmpty()) {
      throw new Error('The Queue is empty')
    }

    if (queue1.isEmpty()) {
      while (queue2.size() > 1) {
        const el = queue2.deQueue()
        queue1.enQueue(el)
      }
      return queue2.deQueue()
    }

    if (!queue1.isEmpty()) {
      while (queue1.size() > 1) {
        const el = queue1.deQueue()
        queue2.enQueue(el)
      }
      return queue1.deQueue()
    }
  }

  toString() {
    const { queue1, queue2 } = this

    if (queue1.isEmpty() && queue2.isEmpty()) {
      return ''
    }

    if (queue1.isEmpty()) {
      return queue2.toString()
    }
    if (queue2.isEmpty()) {
      return queue1.toString()
    }
    return `${queue2.toString()},${queue1.toString()}`
  }
}