let score = 33

console.log(typeof score); // number

let score1 = "34"

console.log(typeof score1) //string

let num = Number(score1)

console.log(typeof num) // number

let score2 = "34a"

let num2 = Number(score2)

console.log(typeof num2)  // number
console.log(num2) // NAN

let score3 = null

let num3 = Number(score3)

console.log(typeof num3)  // number
console.log(num3) // 0

