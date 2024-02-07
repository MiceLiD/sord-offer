import { buildBinaryTree } from './index.mjs'
import { BinaryTree } from '../../lib/binary-tree.mjs'

const preOrderList = [1, 2, 4, 7, 3, 5, 6, 8]
const inOrderList = [4, 7, 2, 1, 5, 3, 8, 6]

const bt = buildBinaryTree(
  preOrderList, inOrderList,
  0, preOrderList.length - 1,
  0, inOrderList.length - 1
)
const binaryTree = new BinaryTree(bt)

console.log('binaryTree: preOrderWithoutRecursion')
binaryTree.preOrderWithoutRecursion()
console.log('\n')

console.log('binaryTree: inOrderWithoutRecursion')
binaryTree.inOrderWithoutRecursion()