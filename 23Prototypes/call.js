function setUsername(username){
    this.username = username
}
function setDetails(name,mail,pass){
    setUsername.call(this,name)

}
let user = new setDetails("alok","email",123)
console.log(user.username)
// user.username