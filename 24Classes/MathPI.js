let descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)
//you can't modify the value of pi reason is 
// we cannot modify the value of Math.PI because it is a read-only property of the Math object. JavaScript defines certain properties like Math.PI as non-writable, meaning they cannot be changed after being set.
const person = {
    name: "John",
    age: 30,
    city: "New York",
    giveintro:function(){
        console.log('hello')
    }
  };
  console.log(Object.getOwnPropertyDescriptor(person,"name"));
  Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false,
    configurable:true
  })
  //if we make any key's property's enumerable then it will not appear anywhere
// person.name = "alok"
// console.log(person)  
// Accessing the property directly still works
console.log(person.name); // Output: Alok
for(let [key,value] of Object.entries(person)){
    //it will not give any error in case of function that are kept with other key-value pair, like what if we only want key-value pair
    if(typeof value!='function')
    console.log(`${key}  ${value}`)
}