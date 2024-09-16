// const user; // -> it must be initialized
// console.log(user)// you cannot access user before its declaration nd initialization
// const user = "Alok";
function scopeTest(){
    console.log(name3);
}
let name3 = "sinha";
scopeTest();

// name3 = "alok";
// console.log(name2)

const [a,b] = [1,2,3,4];
console.log(a)
console.log(b)

function count(...food){
    console.log(food.length)
}
count("Burgers","Fries",null);