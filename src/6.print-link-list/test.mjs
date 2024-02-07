
import { LinkListNode, LinkList } from '../../lib/link-list.mjs'

const linkList = new LinkList()
Array(10).fill().forEach((_, i) => {
  linkList.appendToTail(new LinkListNode(`${i + 1}`))
})

const node0 = new LinkListNode('0')
const node11 = new LinkListNode('11')

console.log('linkList: appendToTail')
linkList.printAsc()
linkList.appendToTail(node11)
linkList.printAsc()
console.log('\n')

console.log('linkList: appendToHead')
linkList.printAsc()
linkList.appendToHead(node0)
linkList.printAsc()
console.log('\n')

console.log('linkList: removeNode(0)')
linkList.printAsc()
linkList.removeNode('0')
linkList.printAsc()
console.log('\n')

console.log('linkList: reverse')
linkList.printAsc()
linkList.reverse()
linkList.printAsc()

console.log('\n')
console.log('linklist: printDesc')
linkList.printDescWithRecursion()