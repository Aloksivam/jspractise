//there is a time when we don't want to use our some class's properties then that can be controlled by using getter and setter
class User{
   constructor(){
    this.name = 'alok'
    this.password = "password"
   }
   //you have to change the password to other variable name(_password in ths case) otherwise it will give maximum call stack ereror as both constructor and setter & getter will try to assign or access same variable 
   get password(){ //getter and setter are just made by 
    // get propertyname(){}
    return `${this._password}hitest`
   }
   set password(value){
    this._password=value;
   }
}
let obj1 = new User();
console.log(obj1.password)
//you can give error like maximum call stack exceeded