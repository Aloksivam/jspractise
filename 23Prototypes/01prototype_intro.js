function multiplyby5(num){
    return num*5
}
multiplyby5.power = 9;
console.log(multiplyby5.power)

function createUser(username,price){
    this.username = username;
    this.price = price
}
createUser.prototype.intro = function(){
    console.log("hey, i have been added by prototype")
}
createUser.prototype.increament = function(){
    this.price++;
}
let user1 = new createUser("alok",5)
user1.increament();
console.log(user1.price)