import { BinaryTreeNode } from '../../lib/binary-tree.mjs'

export function buildBinaryTree(preOrder, inOrder, pStart, pEnd, iStart, iEnd) {
  if (pStart > pEnd || iStart > iEnd) {
    return null
  }

  const rootVal = preOrder[pStart]
  const rootNode = new BinaryTreeNode(rootVal)

  let midIndex = 0
  while (inOrder[midIndex] !== rootVal) {
    midIndex++
  }

  const leftNum = midIndex - iStart
  rootNode.left = buildBinaryTree(
    preOrder, inOrder,
    pStart + 1, pStart + leftNum,
    iStart, midIndex
  )
  rootNode.right = buildBinaryTree(
    preOrder, inOrder,
    pStart + leftNum + 1, pEnd,
    midIndex + 1, iEnd
  )

  return rootNode
}