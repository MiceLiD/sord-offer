import { findNextNode } from './index.mjs'
import { BinaryTree, BinaryTreeNode } from '../../lib/binary-tree.mjs'

const root = new BinaryTreeNode('a')
const b = new BinaryTreeNode('b')
const c = new BinaryTreeNode('c')
const d = new BinaryTreeNode('d')
const e = new BinaryTreeNode('e')
const f = new BinaryTreeNode('f')
const g = new BinaryTreeNode('g')
const h = new BinaryTreeNode('h')
const i = new BinaryTreeNode('i')

root.left = b
root.right = c
b.parent = root
c.parent = root

b.left = d
b.right = e
d.parent = b
e.parent = b

e.left = h
e.right = i
h.parent = e
i.parent = e

c.left = f
c.right = g
f.parent = c
g.parent = c

const binaryTree = new BinaryTree(root)

binaryTree.inOrderRecursion()

console.log('b(有右子树) -> findNextNode: ', findNextNode(b)?.data)
console.log('d(无右子树，且是左节点) -> findNextNode: ', findNextNode(d)?.data)
console.log('i(无右子树，且是右节点) -> findNextNode: ', findNextNode(i)?.data)
console.log('g(无右子树，且是右节点) -> findNextNode: ', findNextNode(g)?.data)

