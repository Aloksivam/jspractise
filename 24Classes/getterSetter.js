//there is a time when we don't want to use our some class's properties then that can be controlled by using getter and setter
class User{
   constructor(){
    this.name = 'alok'
    this.password = "password"
   }
   get password(){
    return `you can't access me`
   }
}
let obj1 = new User();
console.log(u.password)