export class Queue {
  constructor() {
    this.items = []
  }

  enQueue(element) {
    this.items.push(element)
  }

  deQueue() {
    if (!this.items.length) {
      throw new Error('The Queue is empty!')
    }
    return this.items.shift()
  }

  front() {
    if (!this.items.length) {
      throw new Error('The Queue is empty!')
    }
    return this.items[0]
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }

  isEmpty() {
    return this.items.length == 0
  }

  toString() {
    return this.items.join()
  }
}