function User(username, logincount,isLoggedin){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedin = isLoggedin;
    return this
}
let userone = new User("alok",12,true);
let usertwo = new User("shivam",15,false);
console.log(userone)
// console.log(userone.isLoggedin)

// console.log(userone.constructor())