/**
 * 题目:请实现一个函数，把字符串中的每个空格替换成"%20”。
 * 例如， 输入“We are happy.”，则输出“ We%20are%20happy."。
 */

export function replaceWhiteSpace(str) {
  const strArr = str.split('')
  const strLength = strArr.length

  let whiteSpaceCount = 0
  for (let i = 0; i < strLength; i++) {
    if (strArr[i] === ' ') {
      whiteSpaceCount++
    }
  }

  let p1 = strLength - 1
  let p2 = strLength - 1 + whiteSpaceCount * 2

  while (p1 >= 0 && p1 !== p2) {
    if (strArr[p1] !== ' ') {
      strArr[p2] = strArr[p1]
      p1--
      p2--
      continue
    }
    strArr[p2--] = '0'
    strArr[p2--] = '2'
    strArr[p2--] = '%'
    p1--
  }

  return strArr.join('')
}