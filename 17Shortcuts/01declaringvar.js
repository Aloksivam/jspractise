let v1=v2=v3= 20;
console.log(v1)
console.log(v2)

// let [a,b,c] = [22,33,44];
// console.log(a,b,c)
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // => 2
console.log(b); // => 1