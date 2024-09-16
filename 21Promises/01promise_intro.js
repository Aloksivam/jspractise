const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();//
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async completed")
        reject();
    },1000)
}).then(function () {
    console.log("promise  second consumed");
  }).catch(function(){
    console.log("an error occured")
  });