//characterized by  3dodts.
// shortest and simplest method to copy the properties of object into a near

let tope3 = [
    "the clossem",
    "infosys",
    "Master Canteen"
];


/*const top4 = ["patna",...tope3]
const top5 = [...tope3,"patna"]
console.log(top4)
console.log(top5)
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array?
*/

/*const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}*/


// Convert a string to an array using the spread operator
// const greeting = "Hello";
// const arrayOfChars = [...greeting];
// console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


// copy an object into a completely separate object, using the spread operator.
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car 2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)