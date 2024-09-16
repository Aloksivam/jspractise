let marks = [9.48, 9.86, 9.43, 9.5]
console.log(marks.toString())
console.log(marks.join("=>"))
let t = marks.pop()
console.log(t)
marks.push(t)
console.log(marks.shift())
console.log(marks.unshift(9.48))
console.log(marks)
delete marks[1]
console.log(marks)
console.log(marks.length)

let a1 = [1, 2, 3]
let a2 = [11, 12, 13]
let a3 = [21, 22, 23]
a1 = a1.concat(a2, a3)
console.log(a1)
a1.sort()
console.log(a1)


const nums = [0, 1, 2, 3, 4, 5]
nums.splice(2, 3, 33, 44)
console.log(nums)
nums.reverse()
console.log(nums)

nums.forEach((element,index,nums) => {
    console.log(index, element)
});

for(i of nums){
    console.log(i)
}