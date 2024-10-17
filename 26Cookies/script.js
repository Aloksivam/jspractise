console.log(document.cookie)
document.cookie = "name:alok" // will add one more this cookie to list of  existing cookies 
document.cookie = "name2:alok"// will not add the same cookie twice 
console.log(document.cookie)

// let key = prompt("enter your key")
// let value = prompt("enter your value")
// document.cookie = `${key}:${value}`
// console.log(cookie)