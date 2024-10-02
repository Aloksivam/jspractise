new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
        if(!error)
        {resolve({name:"alok",age:24})}
    },1000) 
}).then((user)=>{return user}).then((user,name)=>console.log(name))