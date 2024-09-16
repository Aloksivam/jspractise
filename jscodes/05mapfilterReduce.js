let arr = [45, 23, 21]
let a = arr.map((value) => {
    // return value%3
    return value + 1
})
console.log(a)


let arr2 = [1, 2, 3, 4, 5]
let arr3 = arr2.filter((a) => {
    return a % 2
})
console.log(arr3)


let arr4 = [1, 4, 5, 6]
let arr5 = arr4.reduce((value1, value2) => { return value1 + value2 },33)// last argument is optional which takes initial value
console.log(arr5)

const orderPrices = [50, 30, 25, 40, 15];
const totalOrderValue = orderPrices.reduce((total, price) => total + price, 10);
console.log('The total value of order is ', totalOrderValue)