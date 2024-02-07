export class Stack {
  constructor() {
    this.items = []
  }

  enStack(element) {
    this.items.push(element)
  }

  deStack() {
    if (!this.items.length) {
      throw new Error('The Stack is empty!')
    }
    return this.items.pop()
  }

  front() {
    if (!this.items.length) {
      throw new Error('The Queue is empty!')
    }
    return this.items[this.size() - 1]
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

  toString(reverse) {
    if (reverse) {
      let str = ''
      for (let i = this.size() - 1; i >= 0; i--) {
        str += `${this.items[i]},`
      }
      return str.slice(0, str.length - 1)
    }
    return this.items.join()
  }
}