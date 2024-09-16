// nn ss bb u
let n = 67
let nulli = null
let string1 = 'alok'
let symbol1 = Symbol("symbol made by alok")
let boolean1 = true
let bigint = BigInt(33)
let undef1 = undefined
console.log(n , nulli, string1, symbol1, bigint)

//let us understand the importance of symbol
let obj1={'name':"alok","class":"btech"}
let id=Symbol('id')
obj1[id]=123
console.log(obj1[id])