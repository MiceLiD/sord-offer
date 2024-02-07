/**
 * 题目:
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序,每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
 * [
 *   [1, 2, 8, 9],
 *   [2, 4, 9, 12],
 *   [4, 7, 10, 13],
 *   [6, 8, 11, 15]
 * ]
 * 寻找一个起始位置，使得可以排除一列或一行，缩小检索范围
 */

export function findIn2DimensionalArray(array, target) {
  if (!array.length || !array[0].length) {
    return false
  }
  let rowIndex = 0
  let colIndex = array[0].length - 1

  while (rowIndex < array.length && colIndex > 0) {
    const currentVal = array[rowIndex][colIndex]
    
    if (currentVal === target) {
      return true
    }
  
    if (currentVal < target) {
      rowIndex++
    }

    if (currentVal > target) {
      colIndex--
    }
  }
  return false
}