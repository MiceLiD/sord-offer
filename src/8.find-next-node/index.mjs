import { BinaryTreeNode } from '../../lib/binary-tree.mjs'

/**
 * 题目:给定一棵二叉树和其中的一个节点，如何找出中序遍历序列的下一个节点?
 * 树中的节点除了有两个分别指向左、右子节点的指针，还有一个指向父节点的指针。
 */
export function findNextNode(binaryTreeNode) {
  if (binaryTreeNode === null) {
    return null
  }

  // 当前节点有右子树，下一个节点是右子树中最左的节点
  if (binaryTreeNode.right) {
    let current = binaryTreeNode.right
    while (current.left) {
      current = current.left
    }
    return current
  }

  // 当前节点没有右子树，且是父节点的左子节点，下一个节点是父节点
  if (binaryTreeNode.parent && binaryTreeNode.parent.left === binaryTreeNode) {
    return binaryTreeNode.parent
  }

  // 当前节点没有右子树，且是父节点的右子节点，下一个节点是第一个左拐的父节点
  let current = binaryTreeNode
  while (current.parent && current.parent.right === current) {
    current = current.parent
  }
  return current.parent
}