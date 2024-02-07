import { Singleton } from './index.mjs'

const s1 = new Singleton()
const s2 = new Singleton()

console.log(s1 === s2)