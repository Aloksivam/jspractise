let obj = {}
for (let index = 0; index < 10; index++) {
    obj[index] = index**3
    
}
// console.log(typeof(String(2)))
console.log(obj)
for ( key in obj) {
    // if (Object.hasOwnProperty.call(obj, key))
     {
        console.log(obj[(key)])
        // console.log(obj[String(key)])
    }
}


for (let index = 0; index < Object.keys(obj).length;index++)
{
    // console.log(Object.keys(obj)[index]) //it gives key at reqd index
    console.log(obj[Object.keys(obj)[index]])
}
    

// array.forEach(element => {
    
// });