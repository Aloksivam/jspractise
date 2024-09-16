var fruits=[];
fruits.push("guava");
fruits.push("coconut");

console.log(fruits.toString())
console.log(fruits.join("-"))
console.log(fruits.shift()) // removes first element and return the array
console.log(fruits)
console.log(fruits.unshift("apple")) // adds element to the begining and returns lenght of it
console.log(fruits)
fruits.slice(0);
console.log(fruits);
delete fruits[0];
console.log(fruits);


let person = {
	firstName: "John",
	lastName: "Doe",
	phone: 12345
}

console.log(delete person.phone);
console.log(person);
