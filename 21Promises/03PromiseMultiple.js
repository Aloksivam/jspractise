
// Note the one thing catch block of promise.all() will give handled error at very last
const p1 = new Promise((resolve,reject)=>resolve("First from 1st promise"))
const p3 = new Promise((resolve,reject)=>resolve("Third from 1st promise"))
const p2 = new Promise((resolve,reject)=>reject("Error from 2nd promise"))
// Promise.all([p1,p3,p2]).then((data)=>
// {
//     console.log(data[0]);
//     console.log(data[1]);
// })
// .catch((error)=>console.log(error))
// Promise.allSettled([p1,p3,p2]).then((data)=>
// {
//     console.log(data[0]);
//     console.log(data[1]);
//     console.log(data[2]);
// })
// .catch((error)=>console.log(error))
// Promise.any([p2,p3,p1]).then((data)=> // wait for any promise to resolve
// {
//     console.log(data[0]);
//     console.log(data[1]);
//     console.log(data[2]);
// })
// .catch((error)=>console.log(error))
Promise.race([p2,p1,p2]).then((data)=> // wait for any promise to resolve
{
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
})
.catch((error)=>console.log(error))
