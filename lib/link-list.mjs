export class LinkListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}


export class LinkList {
  constructor() {
    this.head = null
  }

  appendToTail(node) {
    if (this.head === null) {
      this.head = node
      return
    }

    let current = this.head
    while (current && current.next) {
      current = current.next
    }
    current.next = node
  }

  appendToHead(node) {
    if (this.head == null) {
      this.head = node
      return
    }
    node.next = this.head
    this.head = node
  }

  removeNode(data) {
    if (this.head === null) {
      return
    }

    if (this.head.data === data) {
      this.head = this.head.next
      return
    }

    let current = this.head
    while (current && current.next) {
      if (current.next.data === data) {
        break
      }
      current = current.next
    }
    current.next = current.next.next
  }

  printAsc() {
    if (this.head === null) {
      console.log('Empty LinkList')
      return
    }
    const stack = []
    let current = this.head
    while (current) {
      stack.push(current.data)
      current = current.next
    }
    console.log(stack.join(' -> '))
  }

  printDescWithRecursion(node = this.head) {
    const stack = []

    function printDesc(node) {
      if (node) {
        printDesc(node.next)
        stack.push(node.data)
      }
    }
    printDesc(node)
    console.log(stack.join(' -> '))
  }

  printDescWithoutRecursion(node = this.head) {
    const stack = []
    let current = node
    while (current) {
      stack.push(current.data)
      current = current.next
    }

    console.log(stack.reverse().join(' -> '))
  }

  reverse() {
    let current = this.head
    let prev = null
    let next = null

    while (current) {
      next = current.next
      current.next = prev

      prev = current
      current = next
    }
    this.head = prev
  }
}
