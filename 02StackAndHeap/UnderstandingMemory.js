// let name1 = "alok"
// let name2 = name1
// name2  = "shubham"
// console.log(name1)
// let name1 = {"alok":1}
// let name2 = name1
// name2.alok = 3;
// console.log(name1)

// let symbol1 = Symbol("alok")
// let L = {symbol1:"sinha",a:33};
// // let L = {[symbol1]:"sinha",a:33}; //correct way
// console.log(L);








let symbol1 = Symbol("alok")
let L = {symbol1:"sinha",a:33};
console.log(L);
L.l_name="shivam"
console.log(L);
Object.freeze(L);
L.hobby="sleeping"
console.log(L);

