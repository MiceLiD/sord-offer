/**
 * 题目:
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 */

export function minInRotateArray(arr) {
  const len = arr.length
  if (len == 0) {
    throw new Error('No target!')
  }
  if (len == 1) return arr[0]

  let p1 = 0
  let p2 = len - 1
  let mid = p1

  while (arr[p1] >= arr[p2]) {
    if (p2 - p1 === 1) {
      mid = p2
      break
    }

    mid = Math.floor((p1 + p2) / 2)

    if (
      arr[mid] === arr[p1] &&
      arr[mid] === arr[p2] &&
      arr[p2] === arr[p1]
    ) {
      let min = arr[p1]
      for (let i = p1 + 1; i <= p2; i++) {
        if (min > arr[i]) {
          min = arr[i]
        }
      }
      return min
    }

    if (arr[mid] >= arr[p1]) {
      p1 = mid
    } else if (arr[mid] <= arr[p2]) {
      p2 = mid
    }
  }
  return arr[mid]
}