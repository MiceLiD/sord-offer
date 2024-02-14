import { fibonaciiNRecursive, fibonaciiNWithoutRecursive, frogJumpSteps } from './index.mjs'

console.log('fibonaciiNRecursive n = 10')
const now1 = Date.now()
const res1 = fibonaciiNRecursive(10)
const ms1 = Date.now() - now1
console.log(`result = ${res1} ${ms1}ms`)

console.log('\n')

console.log('fibonaciiNWithoutRecursive n = 10')
const now2 = Date.now()
const res2 = fibonaciiNWithoutRecursive(10)
const ms2 = Date.now() - now2
console.log(`result = ${res2} ${ms2}ms`)

console.log('\n')

console.log('frogJumpSteps n = 10')
console.log(`result = ${frogJumpSteps(10)}`)
