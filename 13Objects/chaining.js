const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 =Object.assign(obj1,obj2)// will keep all the values in obj1
const obj3 =Object.assign({},obj1,obj2)// will keep all the values in empty object
//by using spread operator
const obj4 ={...obj1,...obj2}// will keep all the values in empty object

console.log(obj1);//
console.log(obj4);//
