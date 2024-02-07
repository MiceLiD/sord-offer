import { findIn2DimensionalArray } from './index.mjs'

const array = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
]
const target = 7

console.log(findIn2DimensionalArray(array, target))