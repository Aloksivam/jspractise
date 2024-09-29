function createUser({name:string,isPassed:boolean}){
        console.log()
}

// createUser({name:"alok",isPassed:true,nr:100})//Object literal may only specify known properties, and 'nr' does not exist in type
let newUser = {name:"alok",isPassed:true,nr:100}
createUser(newUser)