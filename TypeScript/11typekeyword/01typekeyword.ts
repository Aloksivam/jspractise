type Student={
    name:string;
    age:number
}
type name=string
function createUser(user:Student){}
type User={
    readonly _id:string
    name:string;
    creditCard?:number
}
let myUser:User={
    _id:"21133",
    name:"alok"
}
//myUser._id="sinha"
//will produce an error because _id is read-only
let myUser2:User={
    _id:"21133",
    name:"alok"
}

type cardNumber={
    cardNumber:number
}

type cardDate={
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

