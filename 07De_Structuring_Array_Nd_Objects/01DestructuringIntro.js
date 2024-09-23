let {PI} = Math;
console.log(PI)
// console.log(PI)
// console.log(Math.PI)
// console.log(Math.PI===PI)
// PI = 33
// console.log(Math.PI===PI)
//you can only de-structure something that already exists like you can't destructure something Pi as Pi does not exist in Math
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];
const [,,suv] = vehicles;//note the "," present here it skip the
// const [suv,] = vehicles; // will print 'mustang' as by default it takes first element 
console.log(suv);

