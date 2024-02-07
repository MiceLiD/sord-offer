import { replaceWhiteSpace } from './index.mjs'

const str1 = "We are happy."
const str2 = " We are happy."
const str3 = "We are happy. "
const str4 = "We"
const str5 = " "
const str6 = "   "
console.log(replaceWhiteSpace(str1))
console.log(replaceWhiteSpace(str2))
console.log(replaceWhiteSpace(str3))
console.log(replaceWhiteSpace(str4))
console.log(replaceWhiteSpace(str5))
console.log(replaceWhiteSpace(str6))