import { minInRotateArray } from './index.mjs'

const arr1 = [3, 4, 5, 2]
console.log(`arr = ${arr1.join()}`)
console.log(`min = ${minInRotateArray(arr1)}`)

console.log('\n')

const arr2 = [1, 1, 1, 0, 1]
console.log(`arr = ${arr2.join()}`)
console.log(`min = ${minInRotateArray(arr2)}`)

console.log('\n')

const arr3 = [1, 0, 1, 1, 1]
console.log(`arr = ${arr3.join()}`)
console.log(`min = ${minInRotateArray(arr3)}`)