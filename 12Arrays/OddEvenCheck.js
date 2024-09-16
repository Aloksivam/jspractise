let oddevenCheck = (x,y) => { return x-y
}
let arr = []
for (let index = 100; index>6; index--) {
    arr.push(index);
}
arr.sort(oddevenCheck)
console.log(arr)

let arr2 = [1,4,5]
let arr3 = [11,44,55,...arr2]
console.log(arr3)
