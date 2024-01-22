class LinkListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}


class LinkList {
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

  print() {
    if (this.head === null) {
      console.log('Empty LinkList')
      return
    }

    let current = this.head
    while (current) {
      console.log('Print node.data = ', current.data)
      current = current.next
    }
  }

  printDesc(node = this.head) {
    // 递归
    // if (node) {
    //   this.printDesc(node.next)
    //   console.log(node.data)
    // }

    // 栈
    const stack = []
    let current = node
    while (current) {
      stack.push(current.data)
      current = current.next
    }

    while (stack.length) {
      console.log(stack.pop())
    }
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

const node1 = new LinkListNode('1')
const node2 = new LinkListNode('2')

const linkList = new LinkList()

linkList.appendToTail(node1)
linkList.appendToTail(node2)

const node0 = new LinkListNode('0')

linkList.appendToHead(node0)

// linkList.removeNode('0')

linkList.reverse()

linkList.print()
// linkList.printDesc()