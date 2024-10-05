//js does not support oops it is basically a prototype based language, its classes are primarily syntactic sugar over existing prototype based inheritance mechanisms.
//Object literal = data type used to define objects in js.
const user = {
    name:"alok",
   logincount:2,
   isLoggedin:true,
    getintro:function intro(){
        console.log(this.name)
        // console.log(this)
    }
}
// user.getintro();
// //constructor function
// let date = new Date();
// const promiseone  = new Promise();
function User(username, logincount,isLoggedin){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedin = isLoggedin;
    return this
}
let userone = new User("alok",12,true);
let usertwo = new User("shivam",15,false);
console.log(userone.isLoggedin)
console.log(userone.constructor())