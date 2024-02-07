export class BinaryTreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
    this.parent = null
  }
}

export class BinaryTree {
  constructor(root) {
    this.root = root || null
  }

  preOrderRecursion(root = this.root) {
    const stack = []
    const _preOrder = (root) => {
      if (root) {
        stack.push(root.data)
        _preOrder(root.left)
        _preOrder(root.right)
      }
    }
    _preOrder(root)
    console.log('preOrder: ', stack.join())
  }

  inOrderRecursion(root = this.root) {
    const stack = []
    const _inOrder = (root) => {
      if (root) {
        _inOrder(root.left)
        stack.push(root.data)
        _inOrder(root.right)
      }
    }
    _inOrder(root)
    console.log('inOrder: ', stack.join())
  }

  postOrderRecursion(root = this.root) {
    const stack = []
    const _postOrder = (root) => {
      if (root) {
        _postOrder(root.left)
        _postOrder(root.right)
        stack.push(root.data)
      }
    }
    _postOrder(root)
    console.log('postOrder: ', stack.join())
  }

  preOrderWithoutRecursion(root = this.root) {
    if (!root) {
      return
    }

    let current = root
    const result = []
    const stack = []

    while (stack.length || current) {

      // 读root, 压right
      while (current) {
        result.push(current.data)

        if (current.right) {
          stack.push(current.right)
        }

        current = current.left
      }
      // 弹right
      current = stack.pop()
    }

    console.log('preOrderWithoutRecursion: ', result.join())
  }

  inOrderWithoutRecursion(root = this.root) {
    if (!root) {
      return
    }

    let current = root
    const result = []
    const stack = []

    while (stack.length || current) {

      while (current) {
        // 将当前节点入栈
        stack.push(current)
        // 移动到左子树
        current = current.left
      }
      // 弹出
      current = stack.pop()
      result.push(current.data)
      // 移动到右子树
      current = current.right
    }
    console.log('inOrderWithoutRecursion: ', result.join())
  }
}
