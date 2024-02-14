/**
 * 题目:
 * 求斐波那契数列的第 n 项
 * 斐波那契数列定义：
 * 函数 f, 列项 n; n = 0 时 f(n) = 0, n = 1 时 f(n) = 1, n > 1 时 f(n) = f(n - 1) + f(n - 2)
 */
export function fibonaciiNRecursive(n) {
  if (n <= 0) return n
  if (n == 1) return n

  return fibonaciiNRecursive(n - 1) + fibonaciiNRecursive(n - 2)
}

export function fibonaciiNWithoutRecursive(n) {
  if (n <= 0) return n
  if (n == 1) return n

  let fib1 = 1
  let fib2 = 0
  let fibN = 0

  for (let i = 2; i <= n; i++) {
    fibN = fib1 + fib2

    fib2 = fib1
    fib1 = fibN
  }

  return fibN
}

/**
 * 题目二:青蛙跳台阶问题。
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个n级的台阶总共有多少种跳法
 * 分析：
 * 1个台阶，1种
 * 2个台阶，2种
 * 3个台阶，2+1=3种
 * 4个台阶，3+2=5种
 * 5个台阶，5+3=8种
 * ...
 * n个台阶，f(n-1) + f(n-2)
 */
export function frogJumpSteps(n) {
  if (n == 1) return n
  if (n == 2) return n
  
  return fibonaciiNWithoutRecursive(n)

}
