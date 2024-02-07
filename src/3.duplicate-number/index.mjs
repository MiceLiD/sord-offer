/**
 * 在一个长度为n的数组里的所有数字都在0~n-1的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 * 例如，如果输入长度为7的数组[2, 3, 1, 0, 2, 5, 3]，那么对应的输出是重复的数字2或者3。
 */

/**
 * 解法1
 * 扫描2遍
 * 时间复杂度O(n^2)最差
 */
function duplicateNumber1(arr) {}

/**
 * 解法1
 * 扫描一遍，用Map记录次数
 * 空间复杂度O(1)
 * 时间复杂度O(n)
 */
function duplicateNumber2(arr) {}

/**
 * 解法3
 * 扫描一遍，换位置
 * 时间复杂度O(n)
 */
export function duplicateNumber3(arr) {
  let i = 0

  while (i < arr.length) {

    // 让i位置的值等于i
    while (i !== arr[i]) {

      /********/
      // 找到重复数字
      if (arr[i] === arr[arr[i]]) {
        return arr[i]
      }
      // 交换
      const temp = arr[i]
      arr[i] = arr[temp]
      arr[temp] = temp
      /********/

    }

    i++
  }

  return -1
}
