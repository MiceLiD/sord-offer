import { StackWithQueue, QueueWithStack } from './index.mjs'

const queue = new StackWithQueue()
const stack = new QueueWithStack()

queue.appendTail(1)
queue.appendTail(2)
queue.appendTail(3)
queue.appendTail(4)

console.log('Queue')
console.log(`<- ${queue.toString()} <-`)

queue.deleteHead()
queue.deleteHead()

console.log('Queue after deleteHead twice')
console.log(`<- ${queue.toString()} <-`)

queue.appendTail(5)

console.log('Queue appendTail again')
console.log(`<- ${queue.toString()} <-`)

stack.push(1)
stack.push(2)
stack.push(3)

console.log('\nStack')
console.log(`<- ${stack.toString()} <-`)

stack.pop()

console.log('Stack after pop once')
console.log(`<- ${stack.toString()} <-`)

stack.push(4)

console.log('Stack push again')
console.log(`<- ${stack.toString()} <-`)





