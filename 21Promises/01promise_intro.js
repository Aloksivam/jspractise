// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();//
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async completed")
//         resolve();
//     },1000)
// }).then(function () {
//     console.log("promise  second consumed");
//   }).catch(function(){
//     console.log("an error occured")
//   });

//   const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Alok",email:"aloksivam@gmail.com"})
//     },1000)
//   })
//   promiseThree.then(function(user){
//     console.log(user.email)
//   })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"alok",password:123})
//         }
//         else{
//             reject('Error:Something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then(function(x){
// console.log(x)
// }).catch(function(){
//     console.log("error handling in 4th promise")
// }).finally(()=>console.log("finally, promise is either resolved or rejected"))
// // console.log(name2)

// const promiseFive =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"javascript",password:123})
//         }
//         else{
//             reject('Error:JS went wrong')
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//     try {
        
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log("error");
//     }
// }

// consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json() // it also takes time so you need to make it await too
    console.log(data)
    // console.log(response)
    } 
    catch (error) {
        console.log("E: ",error);
    }
}

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{return response.json()}).then((data)=>{console.log(data)})
// .catch((error)=>console.log(response))
fetch('https://api.github.com/users/Aloksivam').then((response)=>{return response.json()}).then((data)=>{console.log(data)})
.catch((error)=>console.log(response))