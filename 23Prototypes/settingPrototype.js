let arr1 = [1,2,3,"alok"]
let obj1 = {
    key1:1,
    key2:2,
    key3:3
}
Object.prototype.intro = function(){
    console.log("i have been inserted manually into Object")
}
Array.prototype.intro = function(){
    console.log("i have been inserted manually into Array")
}
// obj1.intro() 
// arr1.intro()
const user= {
    isAlive:true
}
const teacher={
    isTeaching: "i teach"
}

const teacher_assistant={
    isAssist:"assisting"
}
const teacher_trainee={
    isTraining:"training",
    __proto__:teacher
}
console.log(teacher_trainee.isAlive)

Object.setPrototypeOf(teacher_assistant,teacher)
console.log(teacher_assistant.isTeaching)

String.prototype.truelength = function(){
    console.log(`length of given string is ${this.trim().length}`)
}
let me = "alok_sinha "
console.log(me.truelength())