//js does not support oops it is basically a prototype based language, its classes are primarily syntactic sugar over existing prototype based inheritance mechanisms.

//Object literal = data type used to define objects in js.
const user = {
    name:"alok",
    age:21,
    getintro:function intro(){
        console.log(this.name)
    }
}
user.getintro();
// //constructor function
// let date = new Date();
// const promiseone  = new Promise();
// function user(username, logincount,isLoggedin){
//     this.username = username;
//     this.logincount = logincount;
//     this.isLoggedin = isLoggedin;
//     return this
// }
// let userone = new user("alok",12,true);
// let usertwo = new user("shivam",15,false);
// console.log(userone.isLoggedin)